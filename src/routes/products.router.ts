import { BaseRouter} from "./router";
import { ProductController } from "../controllers/product.controller";


export class ProductsRouter extends BaseRouter<ProductController> {
  constructor(){
    super(ProductController);
  }

  routes():void{
    this.router.get("/products",this.controller.getAll);
    this.router.get("/products/:id",this.controller.getById);
    this.router.get("/products/testing",this.controller.testingProduct);
    this.router.post("/products",this.controller.addProduct);
    this.router.put("/products/:id",this.controller.updateProduct)
    this.router.delete("/products",this.controller.deleteAllProducts);
    this.router.delete("/products/:id",this.controller.deleteProduct);
  }

}