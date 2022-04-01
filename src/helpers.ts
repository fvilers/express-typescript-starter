import { NextFunction } from "connect";
import { Request, Response } from "express";

export function async(fn: Function) {
  return function (req: Request, res: Response, next: NextFunction) {
    return Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
}
