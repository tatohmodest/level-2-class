import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongoose";
import User from "@/app/models/User";


export async function POST(request:Request) {
    console.log("Request sent")
    try {
        await connectDB();
        const body = await request.json()
        const user = await User.create(body);
        return NextResponse.json({
      success: true,
            data:user
        })
    } 
  catch(error: unknown) {
    const message = error instanceof Error ? error.message : "Internal server error";
        return NextResponse.json({
            success:false, 
      error: message
        }, 
    {status:500})
    }
}
// GET /api/users — fetch all users

export async function GET() {
  try {
    await connectDB();
    const users = await User.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}