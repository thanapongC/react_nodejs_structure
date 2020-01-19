import winston from "winston";
import SlackHook from "winston-slack-webhook-transport";

var Botname = winston.createLogger({
  level: "info",
  transports: [
    new SlackHook({
      webhookUrl: 'WEBHOOKSLACK'
    })
  ],
  exitOnError: false // do not exit on handled exceptions
});

const AlertToSlack = {
  alertError(error, __dirname) {
    if (process.env.NODE_ENV === "production") {
      return Botname.error(error + "\n Location: " + __dirname);
    }
  }
};

export default AlertToSlack;
