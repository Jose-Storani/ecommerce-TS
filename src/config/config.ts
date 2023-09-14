import dotenv from "dotenv";

dotenv.config();

export abstract class ConfigServer{
  static PORT:number = Number(process.env.PORT);
  static ENV:string | undefined = process.env.NODE_ENV || "development";
  static MONGO_URI:string | undefined = ConfigServer.ENV == "development" ? process.env.MONGO_URI_DEV : process.env.MONGO_URI_TEST;
};