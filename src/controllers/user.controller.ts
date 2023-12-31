import {Response, Request} from "express";
import { usersDao } from "../dao/usersDao/userManager";
export class UserController{
  async getUsers(req: Request, res:Response):Promise<void>{
    try {
      const response = await usersDao.getAll();
      res.status(200).json({users:response});
    } catch (error) {
      console.log(error)
    }
    
  }

  getOneUser(req: Request, res:Response){
    const {id} = req.params;
    res.status(200).json({user:"Pepito",id});
  }

  async createUser(req: Request, res:Response){
    const response = await usersDao.createUser(req.body)
    res.status(200).json({user:response});
  }

  deleteUser(req: Request, res:Response){
    const {id} = req.params;
    res.status(200).json({"usuario eliminado":id});
  }
  deleteAllUsers(req: Request, res:Response){
    res.status(200).json({"usuarios eliminados":"ok"})
  }

}