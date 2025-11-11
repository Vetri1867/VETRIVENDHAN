"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogOut, Calendar, Clock, Users, Settings } from "lucide-react"

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const sessionCookie = document.cookie.includes("user_session")
    if (!sessionCookie) {
      router.push("/login")
    }
    setLoading(false)
  }, [router])

  const handleLogout = () => {
    document.cookie = "user_session=; path=/; max-age=0"
    router.push("/")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <img src="/omr-loading.gif" alt="Loading" className="w-32 h-32 mx-auto mb-4 animate-scale-in" />
          <p className="text-white text-lg animate-pulse">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center animate-slide-in-down">
          <div className="flex items-center gap-3">
            <img src="/omr-loading.gif" alt="OMR Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              OMR Scheduler
            </h1>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="gap-2 border-white/20 text-white hover:bg-white/10 bg-transparent"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="mb-12 animate-slide-in-up">
          <h2 className="text-4xl font-bold mb-3">Welcome to Your Dashboard</h2>
          <p className="text-slate-300 text-lg">Manage your schedule and stay organized</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-in">
          {[
            { icon: Calendar, label: "Scheduled Events", value: "12", color: "from-blue-500 to-blue-600" },
            { icon: Clock, label: "Time Saved", value: "24h", color: "from-green-500 to-green-600" },
            { icon: Users, label: "Team Members", value: "5", color: "from-purple-500 to-purple-600" },
            { icon: Settings, label: "System Status", value: "Active", color: "from-pink-500 to-pink-600" },
          ].map((stat, i) => {
            const Icon = stat.icon
            return (
              <Card
                key={i}
                className="border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-white/20 animate-scale-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Main Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
          <Card className="border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition-all duration-300 animate-slide-in-down">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                Upcoming Events
              </CardTitle>
              <CardDescription>Your next scheduled activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Team Meeting", "Project Review", "Client Call"].map((event, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <span className="text-sm">{event}</span>
                    <span className="text-xs text-slate-400">Today</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition-all duration-300 animate-slide-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                Quick Actions
              </CardTitle>
              <CardDescription>Common tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                  Create New Schedule
                </Button>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                  Invite Team Member
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  View Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
