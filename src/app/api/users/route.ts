import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Users } from "@prisma/client"
import { v4 as uuidv4 } from 'uuid';
import { hash } from "bcrypt";

interface User {
  name: string;
  email: string;
}

export async function GET(request: Request) {
  const users = await prisma.users.findMany();
  return NextResponse.json(users, {
    status: 200,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, roleName, password } = body;

    const getLatestId = await prisma.users.findMany({
      orderBy: {
          id: "desc"
      },
      take: 1
  })

  const hashedPass = await hash(password,10)
    
    const users = await prisma.users.create({
      data: {
        id: uuidv4(),
        name: name,
        email: email,
        password: hashedPass,
        roleName: roleName,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    });
    return NextResponse.json(users, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
    });
  }
}
