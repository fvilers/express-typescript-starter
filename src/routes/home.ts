import { RequestHandler, Request, Response } from 'express';

export function home(): RequestHandler {
  return function home(_req: Request, res: Response) {
    res.render('home');
  };
}
