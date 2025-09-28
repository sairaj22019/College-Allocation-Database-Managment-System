import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Lock } from "lucide-react"

export default function ProfilePage() {
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
}
