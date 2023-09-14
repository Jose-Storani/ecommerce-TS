import { Response, Request, NextFunction } from "express";
import { productDao } from "../dao/productsDao/productsManager";

export class ProductController {
  testingProduct(req: Request, res: Response, next: NextFunction){
    res.status(200).json({ products:"ok"});
  }
  async getAll(req: Request, res: Response,next:NextFunction): Promise<void> {
    try {
      const response = await productDao.getAll();
      res.status(200).json({ products: response });
    } catch (error) {
      next(error);
    }
  }

 

  async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = await productDao.getById(req.params.id);
      res.status(200).json({ product: response });
    } catch (error) {
      // res.status(404).json({error:error.message});
      next(error);
    }
  }

  async addProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = await productDao.addProduct(req.body);
      res.status(200).json({ creado: response });
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = await productDao.updateProduct(req.params.id, req.body);
      res.status(200).json({ modificado: response });
    } catch (error) {
      next(error);
    }
  }

  async deleteAllProducts(req: Request, res: Response,next:NextFunction): Promise<void> {
    try {
      const response = await productDao.deleteAll();
    res.status(200).json({ eliminado: response });
    } catch (error) {
      next(error);
    }
    
  }

  async deleteProduct(req: Request, res: Response,next:NextFunction): Promise<void> {
    try {
      const response = await productDao.deleteById(req.params.id);
    res.status(200).json({ eliminado: response });
    } catch (error) {
      next(error);
    }
    
  }
}
