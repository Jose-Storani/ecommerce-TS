import { BaseRouter} from "./router";
import { ProductController } from "../controllers/product.controller";

export class ProductsRouter extends BaseRouter<ProductController> {
  constructor(){
    super(ProductController);
  }

  routes():void{
    this.router.get("/products",this.controller.getAll);
    this.router.get("/products/:id",this.controller.getById);
  }

}