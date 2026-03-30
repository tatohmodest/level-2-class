import mongoose from "mongoose";


const userSchema = new mongoose.Schema( {
    name:{type:String, required:[true, "Name is required"],trim:true}, 
    email:{type:String, required:true, unique:true, lowercase:true},
    age:{type:Number, min:0, max:120},
    role:{type:String, enum:["user", "admin"], default:"user"},
    skills:[String]
},
 {timestamps:true} //adds createdAt & updatedAt automatically
)

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;