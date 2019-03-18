import { RequestHandler, Request, Response } from 'express';
import { async } from '../helpers';

export function home(): RequestHandler {
  return async(async function(_req: Request, res: Response) {
    // This is ridiculous but it pictures how to use the async wrapper
    await new Promise(() => {
      res.render('home');
    });
  });
}
