import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { isProd } from '../helpers';

export function errorHandler(): ErrorRequestHandler {
  return function(err: any, _req: Request, res: Response, _next: NextFunction) {
    if (res.app.get('view engine')) {
      res.locals.message = err.message;
      res.locals.error = !isProd() ? err : {};

      res.status(err.status || 500);
      res.render('error');
    } else {
      const { code, message, stack, status } = err;

      res.status(status || 500).send({ code, message, stack });
    }
  };
}
