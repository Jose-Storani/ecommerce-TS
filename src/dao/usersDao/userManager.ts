import { usersModel } from "../../persistence/mongoDB/models/users.model";

export default class UserManager{
  async getAll(){
    return await usersModel.find({});
  }
}

export const usersDao = new UserManager();