import { Model } from "mongoose";
import {productModel,IProduct } from "../../persistence/mongoDB/models/products.model";

import { CommonMethods } from "../commonMethods";
class ProductManager extends CommonMethods<IProduct>{
  constructor(model:Model<IProduct>){
    super(model);
  }

  
}

export const productDao = new ProductManager(productModel);