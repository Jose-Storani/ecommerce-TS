import { Response, Request, NextFunction } from "express";
import { cartManager } from "../dao/cartDao/cartManager";

export class CartController{
  async createCart(req:Request,res:Response,next:NextFunction){
    const response = await cartManager.create();
    res.status(200).json(response);
  }

  async getAllCarts(req:Request,res:Response,next:NextFunction){
    const response = await cartManager.getAll();
    res.status(200).json(response);
  }

  async getCart(req:Request,res:Response,next:NextFunction){
    const response = await cartManager.getById(req.params.cid);
    res.status(200).json(response);
  }

  async addToCart(req:Request,res:Response,next:NextFunction):Promise<void>{
    const {qty} = req.query;
    const response = await cartManager.addToCart(req.params.cid,req.params.pid, Number(qty) );
    res.status(200).json({cartId:response?._id,
    products:response?.products});

  }

  async deleteCart(req:Request, res:Response,next:Function){
    const response = await cartManager.deleteById(req.params.cid);
    res.status(200).json({eliminado:response})
  }

  async deleteAllCarts(req:Request,res:Response,next:Function){
    const response = await cartManager.deleteAll();
    res.status(200).json({eliminado:true,data:response})
}
}