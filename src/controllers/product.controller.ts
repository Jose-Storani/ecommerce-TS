import {Response, Request} from "express";
import { productDao } from "../dao/productsDao/productsManager";

export class ProductController{
  async getAll(req: Request, res: Response):Promise<void>{
    const response = await productDao.getAll();
    res.status(200).json({products:response});
  }

  async getById(req: Request, res: Response):Promise<void>{
    
    const response = await productDao.getById(req.params.id);
    res.status(200).json({product:response});
  }
}