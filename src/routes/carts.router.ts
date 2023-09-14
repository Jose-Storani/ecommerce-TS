import { CartsController } from "../controllers/carts.controller";
import { BaseRouter } from "./router";

export class CartsRouter extends BaseRouter<CartsController>{
  constructor(){
    super(CartsController)
  }

  routes():void{
    this.router.get("/cart",this.controller.getAll);
  }
}