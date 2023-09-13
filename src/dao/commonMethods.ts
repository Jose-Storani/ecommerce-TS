
import { Model, Document } from 'mongoose';

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
    return await this.model.find({_id : id});
  }

  async deleteAll(){
    return await this.model.deleteMany();
  };

  async deleteById(id:string){
    return await this.model.findOneAndDelete({_id : id});
  }

}