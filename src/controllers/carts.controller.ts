import { Response, Request, NextFunction } from "express";

export class CartsController{
  getAll(req:Request,res:Response):void{
    res.status(200).json({data:"ok"});
  }
}