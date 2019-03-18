import { RequestHandler, Request, Response } from 'express';
import { NextFunction } from 'connect';

export function normalizePort(val: string): string | number | boolean {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

export function isProd(): boolean {
  return process.env.NODE_ENV === 'production';
}

export function async(fn: Function) {
  return function(req: Request, res: Response, next: NextFunction) {
    return Promise.resolve(fn(req, res, next)).catch(err => next(err));
  };
}
