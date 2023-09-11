import mongoose from "mongoose";
import { Document } from "mongoose";

export interface IProduct extends Document {
title:string;
description:string;
code:string;
price:number;
status:string;
stock:number;
category:string;
thumbnail:string;

}

export class ProductSchema {
  public productSchema = new mongoose.Schema<IProduct>({
    title:{
      type: String,
      required: true,
      
  },
  description:{
      type:String,
      required: true
  },
  code:{
      type:String,
      required: true,
      unique: true
  }
  ,
  price:{
      type: Number,
      required:true
  },
  status:{
      type: String,
      required: false
  }
  ,
  stock:{
      type: Number,
      required:true
  },
  category:{
      type: String,
      required:true
  },
  thumbnail:{
      type: String,
      required: false
  }})

  getModel(){
    return mongoose.model<IProduct>("Products",this.productSchema);
  }
};

const productSchema = new ProductSchema();
export const productModel = productSchema.getModel();