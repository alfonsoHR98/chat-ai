import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "GET /api/chat" });
}

export async function POST() {
  return NextResponse.json({ message: "POST /api/chat" });
}

export async function DELETE() {
  return NextResponse.json({ message: "DELETE /api/chat" });
}