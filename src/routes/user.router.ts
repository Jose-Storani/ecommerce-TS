import { BaseRouter } from "./router";
import { UserController } from "../controllers/user.controller";

export class UserRouter extends BaseRouter<UserController> {
constructor(){
  super(UserController);
}

routes(): void {
    this.router.get("/users", this.controller.getUsers);
    this.router.get("/users/:id", this.controller.getOneUser);
    this.router.post("/users",this.controller.createUser);
    this.router.delete("/users", this.controller.deleteAllUsers);
    this.router.delete("/users/:id", this.controller.deleteUser);
}
}