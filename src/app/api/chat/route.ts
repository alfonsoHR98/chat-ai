import { NextResponse, NextRequest } from "next/server";
import prisma from "@lib/prisma"

interface Data {
  userId: string;
  name: string;
}

export async function POST(req: NextRequest) {
  try {
    const data: Data = await req.json();

    const result = await prisma.chat.create({
      data: {
        userId: data.userId,
        name: data.name
      }
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}