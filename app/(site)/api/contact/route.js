import { NextResponse } from "next/server";
import connectDB from "../../lib/mongodb";
import Contact from "../../models/contact";

export async function POST(req) {
  const { email, subject, message } = await req.json();

  try {
    await connectDB();
    await Contact.create({ email, subject, message });
    return NextResponse.json({
      msg: "Message sent Successfully",
    });
  } catch (error) {
    return NextResponse.json({
      errmsg: `${error}`,
    });
  }
}
