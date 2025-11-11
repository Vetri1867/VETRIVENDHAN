import { cookies } from "next/headers"

export async function getSession() {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get("admin_session")?.value

  if (!sessionCookie) {
    return null
  }

  // Validate session (in production, verify JWT)
  return {
    email: "vetrivendhanmuni@gmail.com",
    authenticated: true,
  }
}
