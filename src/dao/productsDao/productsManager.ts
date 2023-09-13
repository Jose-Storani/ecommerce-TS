import { Model } from "mongoose";
import {productModel } from "../../persistence/mongoDB/models/products.model";
import { IProduct } from "../../interfaces/Product.interface";
import { CommonMethods } from "../commonMethods";
class ProductManager extends CommonMethods<IProduct>{
  constructor(model:Model<IProduct>){
    super(model);
  };

  async addProduct(newProduct:IProduct){
    const {title,description,code,price,status="true",stock,category,thumbnail = ""} = newProduct;

    const products:Array<IProduct> = await this.getAll();

    if (!title || !description || !code || !price || !stock || !category) {
      console.error("FALTA PROPIEDAD");
    }

    if (products.some((product) => product.code === code)) {
      console.error("Codigo existente");
    }
    return await this.model.create(newProduct);



  }


  


}

export const productDao = new ProductManager(productModel);