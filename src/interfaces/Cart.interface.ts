
import mongoose,{Document} from "mongoose"
export interface ICart extends Document{
  products:[{
    productId:mongoose.Schema.Types.ObjectId
    quantity:number
  }]
}