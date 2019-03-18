import express, { RequestHandler } from 'express';
import { home } from './home';

const router = express.Router();
router.get('/', home());

export function routes(): RequestHandler {
  return router;
}
