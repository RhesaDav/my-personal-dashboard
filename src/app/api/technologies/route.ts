import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:Request) {
    try {
        const result = await prisma.technologies.findMany()
        return NextResponse.json(result, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({message: "Failed Fetch Technologies"}, {
            status: 200
        })
    }
}

export async function POST(request:Request) {
    try {
        const {name} = await request.json()
        const addTechnologies = await prisma.technologies.create({
            data: {
                name,
                // projectId
            }
        })
        return NextResponse.json({message: 'Success Add Technologies'}, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({message: "Failed Add Technologies", err: error.message}, {
            status: 500
        })
    }
}

export async function DELETE(request:NextRequest) {
    try {
        const id = request.nextUrl.searchParams.get('id')

        const deleteTechnologies = await prisma.technologies.delete({
            where: {
                id: id as string
            }
        })
        
        return NextResponse.json({message: deleteTechnologies}, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({message: "Failed Add Technologies"}, {
            status: 200
        })
    }
}