import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "birthDate",
      "courseLevel",
      "preferredSchedule",
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate phone format (basic validation for Mongolian phone numbers)
    const phoneRegex = /^(\+976|976)?[0-9]{8}$/;
    if (!phoneRegex.test(body.phone.replace(/\s/g, ""))) {
      return NextResponse.json(
        { error: "Invalid phone number format" },
        { status: 400 }
      );
    }

    // Parse birth date
    const birthDate = new Date(body.birthDate);
    if (isNaN(birthDate.getTime())) {
      return NextResponse.json(
        { error: "Invalid birth date" },
        { status: 400 }
      );
    }

    // Check if user already exists with this email
    const existingRegistration = await prisma.registration.findFirst({
      where: {
        email: body.email,
        status: {
          in: ["PENDING", "APPROVED"],
        },
      },
    });

    if (existingRegistration) {
      return NextResponse.json(
        { error: "A registration with this email already exists" },
        { status: 409 }
      );
    }

    // Create new registration
    const registration = await prisma.registration.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        birthDate: birthDate,
        courseLevel: body.courseLevel,
        preferredSchedule: body.preferredSchedule,
        experience: body.experience || null,
        goals: body.goals || null,
        status: "PENDING",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Registration submitted successfully",
        registrationId: registration.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const registrations = await prisma.registration.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        courseLevel: true,
        status: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ registrations });
  } catch (error) {
    console.error("Error fetching registrations:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
