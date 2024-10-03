import { NextResponse } from "next/server";
import prisma from "@lib/prisma"

interface Params {
  params: { id: string };
}

interface Data { 
  content: string;
}

export async function GET() {
  return NextResponse.json({ message: "GET /api/chat/message/:id" });
}

export async function POST(req: Request, { params }: Params) {
  const data: Data = await req.json();
  const result = await prisma.message.create({
    data: {
      content: data.content,
      chatId: params.id,
      role: "user",
    },
  });

  return NextResponse.json(result, { status: 201 });
}