import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    name: {type:String, required:[true, "Please Enter product name"], trim:true},
    price: {type:Number ,  required:true, trime:true},
    category:{type:String, required:true, trim:true},
    inStock:{type:Boolean, required:true},


}, {timestamps:true}
)
export default mongoose.models.Product || mongoose.model("Product", productSchema)



// import clientPromise from "@/app/_utils/mongodb";


// export async function POST(request:Request) {
//     const body = await request.json()

//     const client = await clientPromise
//     const db = client.db("shop")

//     const result = await db.collection("products").insertMany(body)

//     return Response.json({
//         message:"Products Seeded",
//         result
//     })
// }


// export async function GET() {
//     const client = await clientPromise
//     const db = client.db("shop")

//     const products = db.collection("products").find({}).toArray()


//     return Response.json(products)

// }