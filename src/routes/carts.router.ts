import { CartController } from "../controllers/cart.controller";
import { BaseRouter } from "./router";

export class CartsRouter extends BaseRouter<CartController>{
  constructor(){
    super(CartController)
  }

  routes():void{
    this.router.get("/carts",this.controller.getAllCarts);
    this.router.get("/carts/:cid",this.controller.getCart);
    this.router.post("/carts",this.controller.createCart);
    this.router.post("/carts/:cid/products/:pid",this.controller.addToCart)
    this.router.delete("/carts/:cid",this.controller.deleteCart)
    this.router.delete("/carts",this.controller.deleteAllCarts)
  }
}