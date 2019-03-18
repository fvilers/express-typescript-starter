import { RequestHandler, Request, Response } from 'express';

function handler(): RequestHandler {
  return function home(_req: Request, res: Response) {
    res.render('home');
  };
}

export default handler;
