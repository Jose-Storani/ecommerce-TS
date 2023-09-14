import mongoose from "mongoose";
import { ICart } from "../../../interfaces/Cart.interface";

class CartSchema{
  public cartSchema = new mongoose.Schema({
    products:[
      {
        productId:{
          type: mongoose.Schema.Types.ObjectId,
          ref:"Products"
        },
        quantity:Number
      }
    ]

  })

  constructor(){
    this.preLoadProducts();

  }

  preLoadProducts(){
    this.cartSchema.pre("find",function(next){
      this.populate("products.productId");
      next();
    })
  }
  getModel(){
    return mongoose.model<ICart>("Carts",this.cartSchema);
  }
}

const cartSchema = new CartSchema();
cartSchema.preLoadProducts();
export const cartModel = cartSchema.getModel();