import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { createTransport } from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { app as contactApp } from "./contact";
import { app as newsletterApp } from "./newsletter";

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: functions.config().mail.id,
    pass: functions.config().mail.password,
  },
});
admin.initializeApp();

exports.commentsNotification = functions.database
  .ref(`/comments/{collectionName}/{key}`)
  .onCreate((snapshot, context) => {
    // Grab the current value of what was written to the Realtime Database.
    console.log("Run function", context.authType);
    const message = snapshot.val();
    const collection = context?.params?.collectionName?.replace(/-/g, "/");
    console.log(JSON.stringify(message));
    const mailOptions: Mail.Options = {
      from: "Magic of travels <nebneb123.nebneb123@gmail.com>",
      to: ["servane.bausson@gmail.com", "nebounet@gmail.com"],
      subject: `New comment on ${collection}`,
      html: `<h4>From ${message?.name} at ${new Date(message?.timestamp).toLocaleString("fr-FR", {
        timeZone: "Asia/Singapore",
      })}</h4><p>${message?.content}</p>
    <a href="https://magicoftravels.com/${collection}#${context?.params?.key}" target="_blank">View</a>`,
    };
    return transporter.sendMail(mailOptions);
  });

exports.contact = functions.https.onRequest(contactApp);
exports.newsletter = functions.https.onRequest(newsletterApp);
