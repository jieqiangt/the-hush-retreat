export class AppError extends Error {
    constructor({title, clientMessage, status, className, message}) {
      super();
      this.title = title;
      this.clientMessage = clientMessage;
      this.status = status;
      this.className = className;
      this.message = message;
    }
  }
  
  export function errorHandler(err, res) {
    // for errors thrown by
    if (err.clientMessage && err.status) {
      res.status(err.status).json(err);
      return;
    }
    
    console.log(err)
    const {
      title = "Unknown Error",
      status = 500,
      clientMessage = "Unknown Error",
      className = "error",
      message = "No Default Message",
    } = err;
    
    res.status(status).json({ title, clientMessage, status, className, message });
    return;
  }
  
  export function catchApiWrapper(handler, allowedMethods = []) {
    return async (req, res) => {
      if (!allowedMethods.includes(req.method)) {
        res.status(405).json({
          title: "REST Method Not Allowed",
          clientMessage: `Method ${req.method} Not Allowed`,
          status: 405,
          className: "error",
          message: "",
        });
        return;
      }
      try {
        // can add in middleware for other validation
        const result = await handler(req, res);
        return result;
      } catch (err) {
        errorHandler(err, res);
      }
    };
  }
  