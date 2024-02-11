import { response } from "@/utils/response";
import { PrismaClient, User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return response<User[]>({
      message: "Users fetched successfully",
      data: users,
      status: 200,
    });
  } catch (error) {
    return response({ error: "Failed to fetch data", status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: { name: string; email: string } = await request.json();

    const foundUser = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (foundUser)
      return response<User>({ error: "User already exist", status: 400 });

    const createdUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
      },
    });

    return response<User>({
      message: "User created",
      data: createdUser,
      status: 200,
    });
  } catch (error) {
    return response<User>({ error: "Failed to create user", status: 500 });
  }
}
