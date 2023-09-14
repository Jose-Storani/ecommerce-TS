import { CustomError } from "../../utils/errors/customErrors";
import { cartModel } from "../../persistence/mongoDB/models/cart.model";
import { errors } from "../../utils/errors/errorsDictionary";
import { CommonMethods } from "../commonMethods";
import { ICart } from "../../interfaces/Cart.interface";
import { Model } from "mongoose";

export class CartManager extends CommonMethods<ICart> {
  constructor(model: Model<ICart>) {
    super(model);
  }

  async addToCart(cid: string, pid: string, quantity: number) {
    if (typeof cid !== "string" || typeof pid !== "string") {
      CustomError.createError(errors.BadRequest);
    }
    const cartFound = await this.model.findById(cid);
    if (!cartFound) {
      CustomError.createError(errors.NotFound);
    } else {
      if (cartFound.products.length) {
        const productIndex = cartFound.products.findIndex(
          (e) => e.productId.toString() === pid
        );

        //si existe el product en el carrito, agrego la cantidad
        if (productIndex !== -1) {
          const updatedQuantity = await cartModel.findOneAndUpdate(
            {
              _id: cid,
              "products.productId": pid,
            },
            {
              $inc: { "products.$.quantity": quantity },
            },
            { new: true }
          );
          return updatedQuantity;
          //si no existe el producto en el carrito
        } else {
          const pushProduct = await cartModel.findOneAndUpdate(
            { _id: cid },
            {
              $push: {
                products: {
                  productId: pid,
                  quantity,
                },
              },
            }
          )
          return pushProduct;
        }
      }
      //si el carrito existe,pero no tiene ningun producto agregado
      else return cartFound;
    }
  }
}


export const cartManager = new CartManager(cartModel);