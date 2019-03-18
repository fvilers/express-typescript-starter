import { RequestHandler } from 'express';

function handler(): RequestHandler {
  return function home(_req, res) {
    res.render('home');
  };
}

export default handler;
