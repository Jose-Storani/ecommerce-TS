import { BaseRouter } from "./router";
import { UserController } from "../controllers/user.controller";

export class UserRouter extends BaseRouter<UserController> {
constructor(){
  super(UserController);
}

routes(): void {
    this.router.get("/user", this.controller.getUsers);
    this.router.get("/user/:id", this.controller.getOneUser);
    this.router.post("/user",this.controller.createUser);
    this.router.delete("/user", this.controller.deleteAllUsers);
    this.router.delete("/user/:id", this.controller.deleteUser);
}
}