import { type NextRequest, NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"

export async function GET(request: NextRequest) {
  try {
    const sessionCookie = request.cookies.get("admin_session")?.value
    if (!sessionCookie) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const db = await getDatabase()
    const usersCollection = db.collection("users")

    const users = await usersCollection
      .find({})
      .project({ password: 0 })
      .toArray()
      .then((docs) =>
        docs.map((doc) => ({
          id: doc._id.toString(),
          username: doc.username,
          email: doc.email,
          phone: doc.phone,
          createdAt: doc.createdAt,
        })),
      )

    return NextResponse.json({ users }, { status: 200 })
  } catch (error) {
    console.error("[v0] Get users error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const sessionCookie = request.cookies.get("admin_session")?.value
    if (!sessionCookie) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { username, email, phone, password } = await request.json()

    if (!username || !email || !phone || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const db = await getDatabase()
    const usersCollection = db.collection("users")

    const existingUser = await usersCollection.findOne({ $or: [{ email }, { username }] })
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    const result = await usersCollection.insertOne({
      username,
      email,
      phone,
      password, // In production, hash this
      createdAt: new Date(),
    })

    return NextResponse.json({ message: "User created successfully", userId: result.insertedId }, { status: 201 })
  } catch (error) {
    console.error("[v0] Create user error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
