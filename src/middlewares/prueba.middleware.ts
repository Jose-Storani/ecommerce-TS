import { NextFunction,Request,Response } from "express";

export function consolear(req: Request, res: Response,next: NextFunction){
  console.log("ESTOY EN EL MIDDLEWARE");
  next();
}