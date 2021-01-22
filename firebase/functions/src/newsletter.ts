import { adminEmail, contactEmail, createCors, mailgunConfiguration } from "./shared"
import express from "express";
import mailgun from "mailgun-js";

export const app = express();
app.use(createCors());

app.post("/", (req, res) => {
  console.log(JSON.stringify(req.body));
  const { mail } = req.body;

  const mg = mailgun(mailgunConfiguration);

  mg.lists("newsletter@magicoftravels.com")
    .members()
    .add({ members: [{ address: mail }] }, (error) => {
      if (error) {
        console.error(JSON.stringify(error));
        res.status(400).send(error);
      } else {
        const dataToMagicOfTravels = {
          from: adminEmail,
          to: "newsletter.subscribe@magicoftravels.com",
          subject: `Subscription to newsletter@magicoftravels.com`,
          text: `${mail} subscribed to newsletter@magicoftravels.com`,
        };
        mg.messages().send(dataToMagicOfTravels, function (error, body) {
          if (error) {
            console.error(JSON.stringify(error));
            res.status(400).send(error);
          } else {
            console.log("Subscription completed and mail to magic of travels sent with success:", JSON.stringify(body));

            const dataToSubscribee = {
              from: contactEmail,
              to: mail,
              subject: `Newsletter magicoftravels.com: confirmation`,
              text: `Nous vous confirmons que vous avez souscrit à la newsletter de magicoftravels.com.
          
We confirm that you subscribed to magicoftravels.com newsletter.`,
            };
            mg.messages().send(dataToSubscribee, function (error, body) {
              if (error) {
                console.error(JSON.stringify(error));
              } else {
                console.log("Subscription completed and mail sent with success:", JSON.stringify(body));
              }
            });
            res.status(200).send();
          }
        });
      }
    });
});
