

"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Home, Grid3X3, History, Settings, TrendingUp, User, School, BookOpen, Lock } from "lucide-react"

const sidebarItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "seatmatrix", label: "Seat Matrix", icon: Grid3X3 },
  { id: "previous-allocation", label: "Previous Seat Allocation", icon: History },
  { id: "preference", label: "Preference", icon: Settings },
  { id: "prediction", label: "Prediction", icon: TrendingUp },
  { id: "profile", label: "Profile", icon: User },
]

const quickActions = [
  {
    id: "seatmatrix",
    label: "View Seat Matrix",
    icon: Grid3X3,
    description: "Check available seats by college and department",
  },
  {
    id: "previous-allocation",
    label: "Previous Allocations",
    icon: History,
    description: "View your allocation history",
  },
  { id: "preference", label: "Set Preferences", icon: Settings, description: "Update your college preferences" },
  { id: "prediction", label: "Rank Prediction", icon: TrendingUp, description: "Predict your chances" },
]

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("home")

  const recentAllocation = {
    roundNumber: 3,
    allocatedCollege: "IIT Delhi",
    department: "Computer Science and Engineering",
    status: "Allocated",
  }

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="space-y-6">
            <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <School className="h-5 w-5" />
                  Recent Seat Allocation - Round {recentAllocation.roundNumber}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-600 font-medium">Round Number</p>
                    <p className="text-2xl font-bold text-blue-800">{recentAllocation.roundNumber}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-600 font-medium">Allocated College</p>
                    <p className="text-lg font-semibold text-gray-800">{recentAllocation.allocatedCollege}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-600 font-medium">Department</p>
                    <p className="text-lg font-semibold text-gray-800">{recentAllocation.department}</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">Status: {recentAllocation.status}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-gray-800 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quickActions.map((action) => {
                    const IconComponent = action.icon
                    return (
                      <Button
                        key={action.id}
                        variant="outline"
                        className="h-auto p-4 justify-start border-blue-200 hover:bg-blue-50 hover:border-blue-300 bg-transparent"
                        onClick={() => setActiveTab(action.id)}
                      >
                        <div className="flex items-start gap-3 text-left">
                          <IconComponent className="h-5 w-5 text-blue-600 mt-0.5" />
                          <div>
                            <p className="font-medium text-gray-800">{action.label}</p>
                            <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                          </div>
                        </div>
                      </Button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "profile":
        return (
          <div className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Student Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-blue-700 font-medium">Registration Number</Label>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="font-semibold text-gray-800">240001070</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-blue-700 font-medium">Full Name</Label>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="font-semibold text-gray-800">S Sairaj</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-blue-700 font-medium">Email Address</Label>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="font-semibold text-gray-800">sairaj@gmail.com</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-blue-700 font-medium">Mobile Number</Label>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="font-semibold text-gray-800">+91 9876543210</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-blue-700 font-medium">Gender</Label>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="font-semibold text-gray-800">Male</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-blue-700 font-medium">Category</Label>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="font-semibold text-gray-800">OPEN</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-blue-700 font-medium">General Rank</Label>
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="font-bold text-green-800 text-lg">1247</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-blue-700 font-medium">Category Rank</Label>
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                      <p className="font-semibold text-gray-600">N/A (OPEN Category)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Change Password
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="max-w-md space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password" className="text-blue-700 font-medium">
                      Current Password
                    </Label>
                    <Input
                      id="current-password"
                      type="password"
                      placeholder="Enter current password"
                      className="border-blue-200 focus:border-blue-400 focus:ring-blue-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="new-password" className="text-blue-700 font-medium">
                      New Password
                    </Label>
                    <Input
                      id="new-password"
                      type="password"
                      placeholder="Enter new password"
                      className="border-blue-200 focus:border-blue-400 focus:ring-blue-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-blue-700 font-medium">
                      Confirm New Password
                    </Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm new password"
                      className="border-blue-200 focus:border-blue-400 focus:ring-blue-200"
                    />
                  </div>

                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Update Password</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-800">
                {sidebarItems.find((item) => item.id === activeTab)?.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              
            </CardContent>
          </Card>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <div className="w-64 bg-white border-r border-blue-200 min-h-screen">
          <div className="p-6 border-b border-blue-200">
            <h1 className="text-xl font-bold text-blue-800">Student Dashboard</h1>
            <p className="text-sm text-blue-600 mt-1">College Allocation System</p>
          </div>

          <nav className="p-4">
            <ul className="space-y-2">
              {sidebarItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? "bg-blue-100 text-blue-800 border border-blue-200"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        <div className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">{renderContent()}</div>
        </div>
      </div>
    </div>
  )
}
