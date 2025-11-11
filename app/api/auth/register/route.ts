import { type NextRequest, NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"
import bcrypt from "bcryptjs"

export async function POST(request: NextRequest) {
  try {
    const { username, email, phone, password } = await request.json()

    // Validation
    if (!username || !email || !phone || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const db = await getDatabase()
    const usersCollection = db.collection("users")

    // Check if user already exists
    const existingUser = await usersCollection.findOne({
      $or: [{ email }, { username }],
    })

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const result = await usersCollection.insertOne({
      username,
      email,
      phone,
      password: hashedPassword,
      createdAt: new Date(),
    })

    return NextResponse.json({ message: "User registered successfully", userId: result.insertedId }, { status: 201 })
  } catch (error) {
    console.error("[v0] Register error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
