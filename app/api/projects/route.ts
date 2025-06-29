import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching projects" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Received data:", data); // Log incoming data
    if (!data.title || !data.description) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }
    const project = await prisma.project.create({
      data: {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl || null, // Handle optional fields
        link: data.link || null,
      },
    });
    return NextResponse.json(project);
  } catch (error) {
    console.error("Error in POST /api/projects:", error); // Log detailed error
    return NextResponse.json(
      { error: "Error creating project", details: error },
      { status: 500 }
    );
  }
}
