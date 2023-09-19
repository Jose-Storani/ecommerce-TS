import { Model } from "mongoose";
import { productModel } from "../../persistence/mongoDB/models/products.model";
import { IProduct } from "../../interfaces/Product.interface";
import { CommonMethods } from "../commonMethods";
import { CustomError } from "../../utils/errors/customErrors";
import { errors } from "../../utils/errors/errorsDictionary";
class ProductManager extends CommonMethods<IProduct> {
  constructor(model: Model<IProduct>) {
    super(model);
  }

  async addProduct(newProduct: IProduct) {
    const {
      title,
      description,
      code,
      price,
      status = "true",
      stock,
      category,
      thumbnail = "",
    } = newProduct;

    const products: Array<IProduct> = await this.getAll();

    if (!title || !description || !code || !price || !stock || !category) {
      CustomError.createError(errors.BadRequest);
    }

    if (products.some((product) => product.code === code)) {
      CustomError.createError(errors.DuplicatedValue);
    }
    return await this.model.create(newProduct);
  }

  async updateProduct(pid:string, fieldToUpdate:Partial<IProduct>){
    const filter = {_id:pid};
    const response = await this.model.findOneAndUpdate(filter,{
      $set: fieldToUpdate
    },
    {new:true});
    if(!response)CustomError.createError(errors.BadRequest);
    return response
  }

};

export const productDao = new ProductManager(productModel);
