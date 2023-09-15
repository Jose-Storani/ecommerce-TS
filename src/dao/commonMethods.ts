
import { Model, Document } from 'mongoose';
import {CustomError} from '../utils/errors/customErrors';
import { errors } from '../utils/errors/errorsDictionary';


export class CommonMethods<T extends Document>{
  protected model:Model<T>
  constructor(model: Model<T>){
    this.model = model;
  }

  async create(){
    return await this.model.create({});
  }

  async getAll(){
    return await this.model.find({});
  }

  async getById(id:string){
      const response = await this.model.find({_id : id});
    if(!response.length) CustomError.createError(errors.NotFound);
    return response[0];
  }

  async deleteAll(){
    return await this.model.deleteMany();
  };

  async deleteById(id:string){
    const response = await this.model.findOneAndDelete({_id : id});
    if(!response) CustomError.createError(errors.NotFound);
    return response;
  }

}