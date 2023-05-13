import { createWriterLogger, getCurrentDateTimeStr } from "./loggerUtils";

const Logger = createWriterLogger();

export class AppError extends Error {
  constructor({ title, clientMessage, status, className, message }) {
    super();
    this.title = title;
    this.clientMessage = clientMessage;
    this.status = status;
    this.className = className;
    this.message = message;
  }
}

export function catchApiWrapper(handler, allowedMethods = []) {
  return async (req, res) => {
    if (!allowedMethods.includes(req.method)) {
      res.status(405).json({
        title: "REST Method Not Allowed",
        clientMessage: `Method ${req.method} Not Allowed`,
        status: 405,
        className: "error",
      });
      return;
    }
    try {
      // can add in middleware for other validation
      const result = await handler(req, res);
      return result;
    } catch (err) {
      if (err.message) {
        // for catching errors that are not caught by us
        Logger.error(
          `::::::::::::::: ${getCurrentDateTimeStr()} :::::::::::: `
        );
        Logger.error(err);
      }
      errorHandler(err, res);
    }
  };
}

export function errorHandler(err, res) {
  if (err.clientMessage && err.status) {
    // for errors thrown by us
    res.status(err.status).json(err);
    return;
  }

  const {
    title = "Backend Error",
    status = 500,
    clientMessage = "Backend Error! Investigate logs in message!",
    className = "error",
    message = err,
  } = err;

  res.status(status).json({ title, clientMessage, status, className, message });
  return;
}
