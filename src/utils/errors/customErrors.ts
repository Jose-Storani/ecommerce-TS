import { IError } from "../../interfaces/Error.interface";
export class CustomError{
  static createError({name,message,cause,code}:IError){
    const newError:IError = new Error(message,{cause})
    newError.name = name;
    newError.code = code;
    throw newError;

  }
}