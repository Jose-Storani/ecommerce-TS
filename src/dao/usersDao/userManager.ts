import { Model } from "mongoose";
import { IUser } from "../../interfaces/User.interface";
import { usersModel } from "../../persistence/mongoDB/models/users.model";
import { CommonMethods } from "../commonMethods";
import { comparePassword, hashPassword } from "../../utils/bcrypt";
import { CustomError } from "../../utils/errors/customErrors";
import { errors } from "../../utils/errors/errorsDictionary";

export default class UserManager extends CommonMethods<IUser>{
  constructor(model:Model<IUser>){
    super(model);
  }

  async createUser(userData:IUser){
    const { first_name, last_name, email, password } = userData;
		if (!first_name || !last_name || !email || !password) {
			CustomError.createError(errors.BadRequest);
		}
    const user = await this.model.find({email});
    if(user.length){
      return null;
    }
    const hashedPassword = await hashPassword(password);
    const newUser = 
      email === "jdstorani91@gmail.com" ? {
        ...userData,
        password: hashedPassword,
        rol: "Admin"
      } : {
        ...userData,
        password: hashedPassword
      };

      console.log(newUser);

      return await this.model.create(newUser);
    
  }


}

export const usersDao = new UserManager(usersModel);