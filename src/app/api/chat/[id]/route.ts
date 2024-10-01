import { NextRequest, NextResponse } from "next/server";
import prisma from "@lib/prisma";

type Params = {
  id: string;
}

export default async function GET(req: NextRequest, { params }: { params: Params }) {
  const { id } = params;
  
  const chat = await prisma.chat.findUnique({
    where: { id },
    include: { messages: true }
  });

  if (!chat) {
    return NextResponse.json({ error: "Chat not found" }, { status: 404 });
  }

  return NextResponse.json(chat);
}