import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

export async function GET(request: Request) {
  try {
    const result = await prisma.role.findMany();
    return NextResponse.json(result, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  try {
    const { roleName } = await request.json();
    const getLatestId = await prisma.role.findMany({
        orderBy: {
            id: "desc"
        },
        take: 1
    })
    const result = await prisma.role.create({
      data: {
        id: uuidv4(),
        role: roleName,
      },
    });
    return NextResponse.json(result, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
    });
  }
}
