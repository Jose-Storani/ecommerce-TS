import dotenv from "dotenv";

dotenv.config();

export abstract class ConfigServer{
  static PORT:number = Number(process.env.PORT);
  static ENV:string | undefined = process.env.ENVIRONMENT;
  static MONGO_URI:string | undefined = process.env.MONGOURI;
};