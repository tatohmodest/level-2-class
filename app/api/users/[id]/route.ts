import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongoose";
import User from "@/app/models/User";

type Params = { params: { id: string } };
type AsyncParams = { params: Promise<{ id: string }> };

// GET /api/users/:id
export async function GET(_req: Request, { params }: AsyncParams) {
  try {
    const { id } = await params;
    await connectDB();
    const user = await User.findById(id);
    if (!user) return NextResponse.json({ error:"Not found" }, { status:404 });
    return NextResponse.json({ success: true, data: user });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

// PUT /api/users/:id
export async function PUT(req: Request, { params }: AsyncParams) {
  try {
    const { id } = await params;
    await connectDB();
    const body = await req.json();
    const user = await User.findByIdAndUpdate(
      id, body,
      { new: true, runValidators: true }
    );
    if (!user) return NextResponse.json({ error:"Not found" }, { status:404 });
    return NextResponse.json({ success: true, data: user });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

// DELETE /api/users/:id
export async function DELETE(_req: Request, { params }: AsyncParams) {
  try {
    const { id } = await params;
    await connectDB();
    const user = await User.findByIdAndDelete(id);
    if (!user) return NextResponse.json({ error:"Not found" }, { status:404 });
    return NextResponse.json({ success: true, message: "Deleted" });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
