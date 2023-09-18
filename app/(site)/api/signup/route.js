import { NextResponse } from "next/server";
import connectDB from "../../lib/mongodb";
import User from "../../models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectDB();
    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({
      msg: "User registered successfully",
    });
  } catch (error) {
    return NextResponse.json({
      errmsg: `User not registered : ${error}`,
    });
  }
}
