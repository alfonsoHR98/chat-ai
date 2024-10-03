import { NextResponse } from "next/server";
import prisma from "@lib/prisma";
import { Prisma } from "@prisma/client";

interface Params {
  params: { id: string };
}

export async function GET(req: Request, { params }: Params) {
  try {
    const chats = await prisma.chat.findMany({
      where: {
        userId: params.id,
      },
      include: {
        messages: true,
      }
    });

    if (!chats)
      return NextResponse.json({ message: "Chats not found" }, { status: 404 });

    return NextResponse.json(chats);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function DELETE(req: Request, { params }: Params) {
  try {
    const deleteChat = await prisma.chat.delete({
      where: {
        id: params.id,
      },
    });
    if (!deleteChat)
      return NextResponse.json({ message: "Chat not found" }, { status: 404 });

    return NextResponse.json(deleteChat);
  } catch (error) {
    console.log(error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Note not found",
          },
          {
            status: 404,
          }
        );
      }
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}
