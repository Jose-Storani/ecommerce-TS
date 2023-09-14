import express from "express";
import cors from "cors";
import { ConfigServer } from "./config/config";
import { UserRouter } from "./routes/user.router";
import { DataBaseConfig } from "./persistence/mongoDB/db.config";
import { ProductsRouter } from "./routes/products.router";
import { Request,Response,NextFunction } from "express";
import { IError } from "./interfaces/Error.interface";
import { CartsRouter } from "./routes/carts.router";


class ServerInit{
  public app: express.Application = express();
  private PORT: number = ConfigServer.PORT || 8000;
  private ENV: string | undefined = ConfigServer.ENV;

  constructor(){
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended:true }));
    this.app.use(cors());

    
    
    this.listen();
    DataBaseConfig.dbConnect();
    
    this.app.use("/api",this.routers());
    this.app.use(this.errorHandler)
  
    

  }

  routers():Array<express.Router>{
    return [new UserRouter().router, new ProductsRouter().router,new CartsRouter().router]
  }
  listen (){
    this.app.listen(this.PORT,()=>{
      console.log("Conectado al puerto: " + this.PORT);
      console.log("Environment: " + this.ENV);
    })
  }


  private errorHandler(err: IError, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack);
    res.status(err.code as number).json({error:err.message});
  }
};

const server = new ServerInit();
export const app = server.app;
