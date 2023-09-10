import express from "express";
import cors from "cors";
import { ConfigServer } from "./config/config";
import { UserRouter } from "./routes/user.router";
import { DataBaseConfig } from "./persistence/mongoDB/db.config";


class ServerInit{
  public app: express.Application = express();
  private PORT: number = ConfigServer.PORT;
  private ENV: string | undefined = ConfigServer.ENV;

  constructor(){
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended:true }));
    this.app.use(cors());

    
    
    this.listen();
    DataBaseConfig.dbConnect();
    
    this.app.use("/api",this.routers());
    

  }

  routers():Array<express.Router>{
    return [new UserRouter().router]
  }
  listen (){
    this.app.listen(this.PORT,()=>{
      console.log("Conectado al puerto: " + this.PORT);
      console.log("Environment: " + this.ENV);
    })
  }

 
};

new ServerInit();