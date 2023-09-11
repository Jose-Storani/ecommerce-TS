
import { Model, Document } from 'mongoose';

export class CommonMethods<T extends Document>{
  private model:Model<T>
  constructor(model: Model<T>){
    this.model = model;
  }

  async getAll(){
    return await this.model.find({});
  }

  async getById(id:string){
    return await this.model.find({_id : id});
  }


}