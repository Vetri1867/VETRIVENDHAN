"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { Shield, Mail, Lock, ArrowRight } from "lucide-react"

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        toast.error(data.error || "Login failed")
        return
      }

      document.cookie = `admin_session=${data.token}; path=/; max-age=86400`
      toast.success("Login successful")
      router.push("/admin")
    } catch (error) {
      toast.error("An error occurred")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md animate-scale-in">
        <Card className="border-white/20 bg-white/10 backdrop-blur-md shadow-2xl">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <img src="/omr-loading.gif" alt="OMR Logo" className="w-16 h-16" />
                <Shield className="w-6 h-6 text-purple-400 absolute -top-2 -right-2 bg-slate-900 rounded-full p-1" />
              </div>
            </div>
            <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
              <Shield className="w-6 h-6" />
              Admin Portal
            </CardTitle>
            <CardDescription className="text-slate-300">Administrator access only</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2 animate-slide-in-down">
                <label className="block text-sm font-medium text-white flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Admin Email
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-slate-400 focus:border-purple-400"
                />
              </div>
              <div className="space-y-2 animate-slide-in-down">
                <label className="block text-sm font-medium text-white flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Password
                </label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-slate-400 focus:border-purple-400"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 rounded-lg mt-6 flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                disabled={loading}
              >
                {loading ? "Authenticating..." : "Access Admin"}
                {!loading && <ArrowRight className="w-4 h-4" />}
              </Button>
              <p className="text-center text-sm text-slate-300 mt-4">
                <Link href="/" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                  Back to Home
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
