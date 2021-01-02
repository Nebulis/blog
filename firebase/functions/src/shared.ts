import cors from "cors";
import * as functions from "firebase-functions";

export const createCors = () =>
  cors({
    origin: function (origin, callback) {
      console.log("origin:" + origin);
      if (origin === "https://magicoftravels.com" || origin?.endsWith("blog-maillet.netlify.app")) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS: " + origin));
      }
    },
  });

export const mailgunConfiguration = {
  apiKey: functions.config().mailgun?.api?.key ?? "",
  domain: "magicoftravels.com",
  host: "api.eu.mailgun.net",
};

export const adminEmail = "Magic Of Travels Admin <admin@magicoftravels.com>";
export const commentEmail = "Magic Of Travels Comment <coment@magicoftravels.com>";
