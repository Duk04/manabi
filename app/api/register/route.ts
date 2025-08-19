import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function POST(request: NextRequest) {
  try {
    // Check if database is connected
    try {
      await prisma.$connect();
    } catch (dbError) {
      console.error("Database connection error:", dbError);
      return NextResponse.json(
        { error: "Database connection failed" },
        { status: 503 }
      );
    }

    const body = await request.json();
    console.log("Received registration data:", body);

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
        console.log(`Missing required field: ${field}`);
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      console.log("Invalid email format:", body.email);
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate phone format (only numbers, 8-15 digits)
    const phoneRegex = /^[0-9]{8,15}$/;
    if (!phoneRegex.test(body.phone)) {
      console.log("Invalid phone format:", body.phone);
      return NextResponse.json(
        {
          error:
            "Invalid phone number format. Please enter only numbers (8-15 digits)",
        },
        { status: 400 }
      );
    }

    // Parse birth date
    const birthDate = new Date(body.birthDate);
    if (isNaN(birthDate.getTime())) {
      console.log("Invalid birth date:", body.birthDate);
      return NextResponse.json(
        { error: "Invalid birth date" },
        { status: 400 }
      );
    }

    // Check if user already exists with this email
    try {
      const existingRegistration = await prisma.registration.findFirst({
        where: {
          email: body.email,
          status: {
            in: ["PENDING", "APPROVED"],
          },
        },
      });

      if (existingRegistration) {
        console.log("Duplicate email registration attempt:", body.email);
        return NextResponse.json(
          { error: "A registration with this email already exists" },
          { status: 409 }
        );
      }
    } catch (dbQueryError) {
      console.error("Error checking existing registration:", dbQueryError);
      return NextResponse.json(
        { error: "Database query error" },
        { status: 500 }
      );
    }

    // Create new registration
    try {
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

      console.log("Registration created successfully:", registration.id);

      return NextResponse.json(
        {
          success: true,
          message: "Registration submitted successfully",
          registrationId: registration.id,
        },
        { status: 201 }
      );
    } catch (createError) {
      console.error("Error creating registration:", createError);
      return NextResponse.json(
        { error: "Failed to create registration" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Registration error:", error);

    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes("Database connection")) {
        return NextResponse.json(
          { error: "Database connection failed. Please try again later." },
          { status: 503 }
        );
      }
      if (error.message.includes("validation")) {
        return NextResponse.json(
          { error: "Invalid data provided" },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  } finally {
    // Always disconnect from database
    try {
      await prisma.$disconnect();
    } catch (disconnectError) {
      console.error("Error disconnecting from database:", disconnectError);
    }
  }
}

export async function GET() {
  try {
    // Check if database is connected
    try {
      await prisma.$connect();
    } catch (dbError) {
      console.error("Database connection error:", dbError);
      return NextResponse.json(
        { error: "Database connection failed" },
        { status: 503 }
      );
    }

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
  } finally {
    // Always disconnect from database
    try {
      await prisma.$disconnect();
    } catch (disconnectError) {
      console.error("Error disconnecting from database:", disconnectError);
    }
  }
}
