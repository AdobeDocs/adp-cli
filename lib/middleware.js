import express from "express";
import events from "events";

export const middleware = function(options) {
  const app = express();
  const emitter = new events.EventEmitter();

  // optional parameters
  options = options || {};
  options.emitter = emitter;

  const port = 3000;
  app.listen(port, () => {
    console.log('Server listening on port 3000');
  });

  // create request listener and attach event emitter interface
  const requestListener = function(req, res, next) {
      app.use(req, res, next);
  };

  for(var property in emitter) {
      requestListener[property] = emitter[property];
  }

  return requestListener;
}