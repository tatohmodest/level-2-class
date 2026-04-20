import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    name: {type:String, required:[true, "Please Enter product name"], trim:true},
    price: {type:Number ,  required:true, trime:true},
    rating:{type:Number, required:true},
    description:{type:String,required:true, trim:true},
    currency:{type:String, enum:["USD", "XAF", "EUR"]  },
    brand:{type:String, required:true},
    category:{type:String, required:true, trim:true},
    image:{type:String, required:true, trim:true},
    inStock:{type:Boolean, required:true},


}, {timestamps:true}
)
export default mongoose.models.Product || mongoose.model("Product", productSchema)

