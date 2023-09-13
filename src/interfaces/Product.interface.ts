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