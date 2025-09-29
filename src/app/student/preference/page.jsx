"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2, ChevronUp, ChevronDown, Settings, School } from "lucide-react"

export default function PreferencePage() {
  const [preferences, setPreferences] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedInstitute, setSelectedInstitute] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("")

  const institutes = Array.from({ length: 10 }, (_, i) => `IIT${i + 1}`)
  const departments = [ "dept1", "dept2", "dept3", "dept4", "dept5"]

  const handleAddPreference = () => {
    if (selectedInstitute && selectedDepartment) {
      const newPreference = {
        id: Date.now().toString(),
        institute: selectedInstitute,
        department: selectedDepartment,
      }
      setPreferences([...preferences, newPreference])
      setSelectedInstitute("")
      setSelectedDepartment("")
      setIsModalOpen(false)
    }
  }

  const handleDeletePreference = (id) => {
    setPreferences(preferences.filter((pref) => pref.id !== id))
  }

  const handleMoveUp = (index) => {
    if (index > 0) {
      const newPreferences = [...preferences]
      ;[newPreferences[index], newPreferences[index - 1]] = [newPreferences[index - 1], newPreferences[index]]
      setPreferences(newPreferences)
    }
  }

  const handleMoveDown = (index) => {
    if (index < preferences.length - 1) {
      const newPreferences = [...preferences]
      ;[newPreferences[index], newPreferences[index + 1]] = [newPreferences[index + 1], newPreferences[index]]
      setPreferences(newPreferences)
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-white">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <Settings className="h-5 w-5" />
              College Preferences
            </CardTitle>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Preference
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-blue-800">Add New Preference</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Select Institute</label>
                    <Select value={selectedInstitute} onValueChange={setSelectedInstitute}>
                      <SelectTrigger className="border-blue-200 focus:border-blue-400">
                        <SelectValue placeholder="Choose an institute" />
                      </SelectTrigger>
                      <SelectContent>
                        {institutes.map((institute) => (
                          <SelectItem key={institute} value={institute}>
                            {institute}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Select Department</label>
                    <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                      <SelectTrigger className="border-blue-200 focus:border-blue-400">
                        <SelectValue placeholder="Choose a department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((department) => (
                          <SelectItem key={department} value={department}>
                            {department}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    onClick={handleAddPreference}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={!selectedInstitute || !selectedDepartment}
                  >
                    Add Preference
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-blue-600">Set your college and department preferences in order of priority.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-gray-800 flex items-center gap-2">
            <School className="h-5 w-5" />
            Your Preferences ({preferences.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {preferences.length === 0 ? (
            <div className="text-center py-8">
              <School className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No preferences added yet</p>
              <p className="text-gray-400 text-sm mt-2">Click "Add Preference" to get started</p>
            </div>
          ) : (
            <div className="space-y-3">
              {preferences.map((preference, index) => (
                <div
                  key={preference.id}
                  className="flex items-center justify-between p-4 bg-white border border-blue-100 rounded-lg hover:border-blue-200 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{preference.institute}</p>
                      <p className="text-sm text-gray-600">{preference.department}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleMoveUp(index)}
                      disabled={index === 0}
                      className="border-blue-200 hover:bg-blue-50 hover:border-blue-300"
                    >
                      <ChevronUp className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleMoveDown(index)}
                      disabled={index === preferences.length - 1}
                      className="border-blue-200 hover:bg-blue-50 hover:border-blue-300"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeletePreference(preference.id)}
                      className="border-red-200 hover:bg-red-50 hover:border-red-300 text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
