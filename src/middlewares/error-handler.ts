import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import logger from '@fvilers/simple-logger';
import { isProd } from '../helpers';

export function errorHandler(): ErrorRequestHandler {
  return function(err: any, _req: Request, res: Response, _next: NextFunction) {
    const { code, message, stack, status } = err;

    logger.error(stack);

    if (res.app.get('view engine')) {
      res.locals.message = message;
      res.locals.error = !isProd() ? err : {};

      res.status(status || 500);
      res.render('error');
    } else {
      res.status(status || 500).send({ code, message, stack });
    }
  };
}
