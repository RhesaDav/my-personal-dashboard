import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const response = await prisma.project.findMany();
    return NextResponse.json(response, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to retrieve projects" }, {
      status: 500,
    });
  }
}

export async function POST(request:Request) {
  try {
    const body = await request.json()
    const {name,userId,technologies} = body
    console.log({name,userId,technologies})
    const addProject = await prisma.project.create({
      data: {
        name,
        userId,
        technologies
      }
    })
    return NextResponse.json({message: 'Success Add Project'}, {
      status: 200
    })
  } catch (error) {
    return NextResponse.json({message: 'Failed Add Project'}, {
      status: 500
    })
  }
}