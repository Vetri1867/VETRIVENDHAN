import { getDatabase } from "@/lib/mongodb"

export async function GET() {
  try {
    const db = await getDatabase()
    const collections = await db.listCollections().toArray()

    return Response.json({
      status: "Connected",
      message: "MongoDB connection successful",
      database: "omr_scheduler",
      collections: collections.map((c) => c.name),
      timestamp: new Date().toISOString(),
    })
  } catch (error: any) {
    return Response.json(
      {
        status: "Error",
        message: error.message,
        hint: "Check MONGODB_URI in .env.local - password might be incorrect",
      },
      { status: 500 },
    )
  }
}
