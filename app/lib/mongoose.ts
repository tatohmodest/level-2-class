import mongoose from "mongoose";

const MONGO_URI =  process.env.MONGODB_URI

if (!MONGO_URI) {
    throw new Error ("Please , Make sure you have a connection string")
}

type MongooseCache = {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
};

declare global {
    var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache ?? {
    conn: null,
    promise: null
};

global.mongooseCache = cached;

export async function connectDB() {

    if (cached.conn) return cached.conn

    if(!cached.promise) {
        cached.promise = mongoose.connect(MONGO_URI as string, {
            bufferCommands:false
        })
    }

    cached.conn = await cached.promise
    console.log("Connected successfully")
    return cached.conn
}