import {Response, Request} from "express";
export class UserController{
  getUsers(req: Request, res:Response){
    res.status(200).json({user:"Joseph"});
  }

  getOneUser(req: Request, res:Response){
    const {id} = req.params;
    res.status(200).json({user:"Pepito",id});
  }

  createUser(req: Request, res:Response){
    const {name,email,address,password} = req.body;
    res.status(200).json({"usuario_creado":{name,email,address,password}})
  }

  deleteUser(req: Request, res:Response){
    const {id} = req.params;
    res.status(200).json({"usuario eliminado":id});
  }
  deleteAllUsers(req: Request, res:Response){
    res.status(200).json({"usuarios eliminados":"ok"})
  }

}