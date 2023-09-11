import mongoose from "mongoose";

class UserSchema {
  public userSchema: mongoose.Schema = new mongoose.Schema({
    title:{
      type: String,
      required: true,
      
  },
  description:{
      type:String,
      required: true
  },
  code:{
      type:String,
      required: true,
      unique: true
  }
  ,
  price:{
      type: Number,
      required:true
  },
  status:{
      type: String,
      required: false
  }
  ,
  stock:{
      type: Number,
      required:true
  },
  category:{
      type: String,
      required:true
  },
  thumbnail:{
      type: String,
      required: false
  }})

  getModel(){
    return mongoose.model("Users",this.userSchema);
  }
};

const userSchema = new UserSchema();
export const usersModel = userSchema.getModel();



