"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading animation duration
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <img src="/omr-loading.gif" alt="Loading" className="w-48 h-48 animate-scale-in" />
          </div>
          <p className="text-white text-xl animate-pulse">Initializing OMR Scheduler...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <header className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 py-6">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-2 animate-slide-in-down">
            <img src="/omr-loading.gif" alt="OMR Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              OMR Scheduler
            </span>
          </div>
          <div className="flex gap-4 animate-slide-in-down">
            <Link href="/login">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
              >
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-20">
        <div className="max-w-4xl text-center space-y-8 animate-fade-in">
          <div className="animate-slide-in-down">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Redefining Effortless
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Productivity
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Smart tools that do the heavy lifting — so you don't have to. Manage your schedule, optimize your
              workflow, and achieve more with less effort.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center animate-slide-in-up pt-8">
            <Link href="/register">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Get Started Free
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-6 text-lg rounded-lg hover:scale-105 transition-all duration-300 bg-transparent"
              >
                Sign In
              </Button>
            </Link>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 animate-scale-in">
            {[
              { icon: "⚡", title: "Lightning Fast", desc: "Real-time scheduling and updates" },
              { icon: "🔒", title: "Secure", desc: "Enterprise-grade security" },
              { icon: "📊", title: "Analytics", desc: "Deep insights into your data" },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:bg-white/20 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Section */}
      <section className="py-20 px-6 md:px-12 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 animate-slide-in-up">Admin Portal</h2>
          <p className="text-xl text-slate-300 mb-8">
            Are you an administrator? Access your admin dashboard to manage users and system settings.
          </p>
          <Link href="/admin/login">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Admin Login
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 md:px-12 text-center text-slate-400">
        <p>© 2025 OMR Scheduler. Built with passion for productivity.</p>
      </footer>
    </main>
  )
}
