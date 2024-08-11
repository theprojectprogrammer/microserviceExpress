const { createLogger, format, transports } = require('winston');
const { combine, timestamp, splat, json, printf } = format;
const os = require('os');
const httpContext = require('express-http-context');
const appName = require('../../package.json').name || '';

const myFormat = printf(({ level, message, timestamp }) => {
  return `timestamp: ${timestamp}, appName: ${appName}, host: [${os.hostname()}], level: ${level}, sessionID: ${httpContext.get('reqId') || ''},  message: ${message}`;
});

const logger = createLogger({
    format: combine(
      timestamp(),
      splat(),
      json(),
      myFormat
    ),
    transports: [new transports.Console()]
  });

module.exports = logger;