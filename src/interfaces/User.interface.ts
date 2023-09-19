import mongoose,{ Document } from "mongoose";
export interface IUser extends Document{
  first_name:string,
  last_name:string,
  email:string,
  age?:string,
  password:string,
  associatedCart?: mongoose.Types.ObjectId
  rol?:string,
  failedLoginAttempts?:number,
  lastLogin?:Date
}