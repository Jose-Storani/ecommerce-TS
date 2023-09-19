import mongoose from "mongoose";
import { IUser } from "../../../interfaces/User.interface";
export class UserSchema {
  public userSchema: mongoose.Schema = new mongoose.Schema<IUser>({
    first_name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      age: {
        type: String,
        default:"0"
      },
      password: {
        type: String,
        required: true,
      },
      associatedCart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carts',
      },
      rol: {
        type: String,
        default: 'Usuario',
      },
      failedLoginAttempts: {
        type: Number,
        default: 0,
      },
      lastLogin: Date,
    
  });

  getModel(){
    return mongoose.model<IUser>("Users",this.userSchema);
  }
};

const userSchema = new UserSchema();
export const usersModel = userSchema.getModel();



