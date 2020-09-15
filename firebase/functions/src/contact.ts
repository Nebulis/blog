import { adminEmail, createCors, mailgunConfiguration } from "./shared";
import express from "express";
import mailgun from "mailgun-js";

export const app = express();
app.use(createCors());

app.post("/", (req, res) => {
  console.log(JSON.stringify(req.body));
  const { name, message, mail, title, isPro } = req.body;

  const mg = mailgun(mailgunConfiguration);
  const data = {
    from: adminEmail,
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
