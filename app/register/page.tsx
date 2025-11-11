"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { ArrowRight, User, Mail, Phone, Lock } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match")
      setLoading(false)
      return
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        toast.error(data.error || "Registration failed")
        return
      }

      toast.success("Registration successful! Please login.")
      router.push("/login")
    } catch (error) {
      toast.error("An error occurred")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md animate-scale-in">
        <Card className="border-white/20 bg-white/10 backdrop-blur-md shadow-2xl">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-4">
              <img src="/omr-loading.gif" alt="OMR Logo" className="w-16 h-16" />
            </div>
            <CardTitle className="text-2xl text-white">Create Account</CardTitle>
            <CardDescription className="text-slate-300">Join OMR Scheduler today</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-2 animate-slide-in-down">
                <label className="block text-sm font-medium text-white flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Username
                </label>
                <Input
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Choose a username"
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-slate-400 focus:border-blue-400"
                />
              </div>
              <div className="space-y-2 animate-slide-in-down">
                <label className="block text-sm font-medium text-white flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-slate-400 focus:border-blue-400"
                />
              </div>
              <div className="space-y-2 animate-slide-in-down">
                <label className="block text-sm font-medium text-white flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone
                </label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-slate-400 focus:border-blue-400"
                />
              </div>
              <div className="space-y-2 animate-slide-in-down">
                <label className="block text-sm font-medium text-white flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Password
                </label>
                <Input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-slate-400 focus:border-blue-400"
                />
              </div>
              <div className="space-y-2 animate-slide-in-down">
                <label className="block text-sm font-medium text-white flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Confirm Password
                </label>
                <Input
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-slate-400 focus:border-blue-400"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2 rounded-lg mt-6 flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
                {!loading && <ArrowRight className="w-4 h-4" />}
              </Button>
              <p className="text-center text-sm text-slate-300 mt-4">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                  Sign in
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
