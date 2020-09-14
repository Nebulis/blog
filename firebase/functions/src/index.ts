import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { createTransport } from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import cors from "cors";
import express from "express";
import mailgun from "mailgun-js";

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: functions.config().mail.id,
    pass: functions.config().mail.password,
  },
});
admin.initializeApp();

// TODO bad name
exports.newsletterNotification = functions.database
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

const app = express();
app.use(
  cors({
    origin: function (origin, callback) {
      if (origin === "magicoftravels.com" || origin?.endsWith("blog-maillet.netlify.app")) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.post("/", (req, res) => {
  console.log(JSON.stringify(req.body));
  const { name, message, mail, title, isPro } = req.body;

  const mg = mailgun({
    apiKey: functions.config().mailgun?.api?.key ?? "",
    domain: "magicoftravels.com",
    host: "api.eu.mailgun.net",
  });
  const data = {
    from: "admin@magicoftravels.com",
    to: "contact@magicoftravels.com",
    "h:Reply-To": `${name} <${mail}>`,
    subject: `[${isPro ? "Professionel" : "Particulier"}] ${title}`,
    html: `<h4>From ${name} &lt;${mail}&gt;</h4><p>${message}</p>`,
  };
  mg.messages().send(data, function (error, body) {
    if (error) {
      console.error(JSON.stringify(error));
      res.status(400).send(error);
    } else {
      console.log("Mail sent with success:", JSON.stringify(body));
      res.status(200).send();
    }
  });
});

exports.contact = functions.https.onRequest(app);
