import clientPromise from "./mongodb";


export const getProducts = async() => {
    const client = await clientPromise

    const db = await client.db("shop")
    const product = await db.collection("products").find({}).toArray()

    return product
}