import { MongoClient } from "mongodb"

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017"

async function setupDatabase() {
  const client = new MongoClient(MONGODB_URI)

  try {
    await client.connect()
    console.log("[v0] Connected to MongoDB")

    const db = client.db("omr_scheduler")

    // Create users collection with indexes
    const usersCollection = db.collection("users")

    // Create unique indexes for email and username
    await usersCollection.createIndex({ email: 1 }, { unique: true })
    await usersCollection.createIndex({ username: 1 }, { unique: true })

    console.log("[v0] Database indexes created successfully")

    // Insert sample users if collection is empty
    const count = await usersCollection.countDocuments()
    if (count === 0) {
      console.log("[v0] Inserting sample users...")

      const bcrypt = require("bcryptjs")
      const hashedPassword = await bcrypt.hash("password123", 10)

      await usersCollection.insertMany([
        {
          username: "john_doe",
          email: "john@example.com",
          phone: "9876543210",
          password: hashedPassword,
          createdAt: new Date(),
        },
        {
          username: "jane_smith",
          email: "jane@example.com",
          phone: "9876543211",
          password: hashedPassword,
          createdAt: new Date(),
        },
      ])

      console.log("[v0] Sample users inserted")
    }

    console.log("[v0] Database setup complete!")
  } catch (error) {
    console.error("[v0] Database setup error:", error)
  } finally {
    await client.close()
  }
}

setupDatabase()
