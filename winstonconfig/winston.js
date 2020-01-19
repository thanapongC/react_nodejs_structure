import appRoot from "app-root-path";
import winston from "winston";

// define the custom settings for each transport (file, console)
var options = {
  file: {
    level: "info",
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: "debug",
    handleExceptions: true,
    json: true,
    colorize: true
  }
};

// instantiate a new Winston Logger with the settings defined above
var logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.File(options.file),
    // new winston.transports.Console(options.console),
  ],
  exitOnError: false // do not exit on handled exceptions
});

// logger.info('This should now appear on Slack');

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};

module.exports = logger;
