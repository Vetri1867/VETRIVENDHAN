import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

    if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Admin credentials not configured" }, { status: 500 })
    }

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const token = "admin_token_" + Date.now()
      return NextResponse.json({ token, message: "Login successful" }, { status: 200 })
    }

    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
  } catch (error) {
    console.error("[v0] Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
