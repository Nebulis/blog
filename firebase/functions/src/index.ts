import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import mailgun, { messages } from "mailgun-js";
import { app as contactApp } from "./contact";
import { app as newsletterApp } from "./newsletter";
import { adminEmail, commentEmail, mailgunConfiguration } from "./shared";

admin.initializeApp();

exports.commentsNotification = functions.database
  .ref(`/comments/{collectionName}/{key}`)
  .onCreate((snapshot, context) => {
    // Grab the current value of what was written to the Realtime Database.
    console.log("Run function", context.authType);
    const message = snapshot.val();
    const collection = context?.params?.collectionName?.replace(/__/g, "/");
    console.log(JSON.stringify(message));

    const mg = mailgun(mailgunConfiguration);
    const data: messages.SendData = {
      from: adminEmail,
      to: commentEmail,
      subject: `New comment on ${collection}`,
      html: `<h4>From ${message?.name} at ${new Date(message?.timestamp).toLocaleString("fr-FR", {
        timeZone: "Asia/Singapore",
      })}</h4><p>${message?.content}</p>
    <p><a href="https://magicoftravels.com/${collection}#${context?.params?.key}" target="_blank">View</a></p>
    <p>Delete comment: TODO</p>`,
    };
    mg.messages().send(data, function (error) {
      if (error) {
        console.error(JSON.stringify(error));
      } else {
        console.log("Mail sent with success:", JSON.stringify(data));
      }
    });
  });

exports.contact = functions.https.onRequest(contactApp);
exports.newsletter = functions.https.onRequest(newsletterApp);
