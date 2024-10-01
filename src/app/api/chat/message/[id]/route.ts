import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "GET /api/chat/message/:id" });
}

export async function POST() {
  return NextResponse.json({ message: "POST /api/chat/message/:id" });
}