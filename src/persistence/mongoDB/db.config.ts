import mongoose from "mongoose";
import { ConfigServer } from "../../config/config";

export class DataBaseConfig{
  static URI:string = ConfigServer.MONGO_URI || "";

  static dbConnect():void{
   mongoose.connect(DataBaseConfig.URI)
   .then(()=> console.log("Conectado a mongoDB"))
   .catch((error)=>console.log(error));
  }
} 

