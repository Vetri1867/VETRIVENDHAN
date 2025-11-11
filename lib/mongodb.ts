import { MongoClient } from "mongodb"

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
let cachedClient: MongoClient | null = null

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient
  }

  const client = new MongoClient(uri)
  await client.connect()
  cachedClient = client
  return client
}

export async function getDatabase() {
  const client = await connectToDatabase()
  return client.db("omr_scheduler")
}
