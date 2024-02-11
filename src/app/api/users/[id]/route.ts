import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const users = await prisma.user.findUnique({
      where: {
        id: context.params.id,
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
