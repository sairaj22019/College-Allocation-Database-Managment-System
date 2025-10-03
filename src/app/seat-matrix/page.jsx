
"use client"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid3X3 } from "lucide-react"

const generateSeatData = (institute, department, category) => {
  const data = []
  const institutes = institute === "all" ? Array.from({ length: 10 }, (_, i) => `IIT${i + 1}`) : [institute]
  const departments = department === "all" ? Array.from({ length: 5 }, (_, i) => `dept${i + 1}`) : [department]
  const categories = category === "all" ? Array.from({ length: 16 }, (_, i) => `${i + 1}`) : [category]

  institutes.forEach((inst) => {
    departments.forEach((dept) => {
      categories.forEach((cat) => {
        data.push({
          institute: inst,
          department: dept,
          category: cat,
          seats: Math.floor(Math.random() * 50) + 10, // Random seats between 10-59
        })
      })
    })
  })
  return data
}

export default function SeatMatrixPage() {
  const [selectedInstitute, setSelectedInstitute] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedInstituteArray, setSelectedInstituteArray] = useState([])
  const [selectedDepartmentArray, setSelectedDepartmentArray] = useState([])
  const [selectedCategoryArray, setSelectedCategoryArray] = useState([])
  const [seatData, setSeatData] = useState([])
  const [showResults, setShowResults] = useState(false)

  // NEW: State for fetched institutes
  const [institutes, setInstitutes] = useState([])
  const [departments, setDepartments] = useState([])
  const [categories, setCategories] = useState([])

  // Fetch institute list from backend
  useEffect(() => {
    const fetchInstitutes = async () => {
      try {
        const res = await fetch("http://localhost:9000/college/all")
        const data = await res.json()
        if (data.success && data.namesList) {
          setInstitutes(data.namesList)
        }
      } catch (error) {
        console.error("Error fetching institutes:", error)
      }
    }
    const fetchDepartments = async () => {
      try {
        const res = await fetch("http://localhost:9000/department/all")
        const data = await res.json()
        if (data.success && data.namesList) {
          setDepartments(data.namesList)
        }
      } catch (error) {
        console.error("Error fetching institutes:", error)
      }
    }
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:9000/category/all")
        const data = await res.json()
        if (data.success && data.namesList) {
          setCategories(data.namesList)
        }
      } catch (error) {
        console.error("Error fetching institutes:", error)
      }
    }

    fetchInstitutes()
    fetchDepartments()
    fetchCategories()
  }, [])
  


  const handleSubmit = () => {
    if (selectedInstitute && selectedDepartment && selectedCategory) {
      setSelectedCategoryArray([])
      setSelectedInstituteArray([])
      setSelectedDepartmentArray([])
      // const data = generateSeatData(selectedInstitute, selectedDepartment, selectedCategory)
      if(selectedInstitute==="all"){
        institutes.forEach((inst)=>{
          setSelectedInstituteArray((prev) => [...prev, inst.id]);
        })
      }else{
        setSelectedInstituteArray([selectedInstitute]);
      }

      if(selectedDepartment==="all"){
        departments.forEach((dept)=>{
          setSelectedDepartmentArray((prev) => [...prev, dept.id]);
        })
      }else{
        setSelectedDepartmentArray([selectedDepartment]);
      }

      if(selectedCategory==="all"){
        categories.forEach((cat)=>{
          setSelectedCategoryArray((prev) => [...prev, cat.id]);
        })
      }else{
        setSelectedCategoryArray([selectedCategory]);
      }

      // setSeatData(data)
      setShowResults(true)
    }
  }

  const resetForm = () => {
    setSelectedInstitute("")
    setSelectedDepartment("")
    setSelectedCategory("")
    setSeatData([])
    setShowResults(false)
  }

  return (
    <div className="space-y-6 m-5">
      <Card className="border-blue-200 p-0">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100 pt-5 mt-0 rounded-t-xl">
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <Grid3X3 className="h-5 w-5" />
            Seat Matrix
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="space-y-4">
              {/* Institute Dropdown */}
              <div className="grid grid-cols-4">
                <label className="text-sm font-medium text-gray-700 col-span-1 my-auto">
                  Select Institute
                </label>
                <Select value={selectedInstitute} onValueChange={setSelectedInstitute}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-400 w-full col-span-3">
                    <SelectValue placeholder="Choose institute" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {institutes.map((inst) => (
                      <SelectItem key={inst.id} value={String(inst.id)}>
                        {inst.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Department Dropdown */}
              <div className="grid grid-cols-4">
                <label className="text-sm font-medium text-gray-700 col-span-1 my-auto">
                  Select Department
                </label>
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-400 w-full col-span-3">
                    <SelectValue placeholder="Choose department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {departments.map((dept) => (
                      <SelectItem key={dept.id} value={String(dept.id)}>
                        {dept.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Category Dropdown */}
              <div className="grid grid-cols-4">
                <label className="text-sm font-medium text-gray-700 col-span-1 my-auto">
                  Select Category
                </label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-400 w-full col-span-3">
                    <SelectValue placeholder="Choose category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={String(cat.id)}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={handleSubmit}
                disabled={!selectedInstitute || !selectedDepartment || !selectedCategory}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
              >
                Submit
              </Button>

            </div>

            {showResults && (
              <div className="space-y-4">
                <div className="border-t border-blue-200 pt-6"></div>
                <h3 className="text-lg font-semibold text-gray-800">Seat Matrix Results</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-blue-200 rounded-lg">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
                          S.No.
                        </th>
                        <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
                          Institute Name
                        </th>
                        <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
                          Department
                        </th>
                        <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
                          Category Type
                        </th>
                        <th className="border border-blue-200 px-4 py-3 text-left text-sm font-semibold text-blue-800">
                          Number of Seats
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {seatData.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-blue-25"}>
                          <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 font-medium">
                            {index + 1}
                          </td>
                          <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 break-words">
                            {row.institute}
                          </td>
                          <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 break-words">
                            {row.department}
                          </td>
                          <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 break-words">
                            {row.category}
                          </td>
                          <td className="border border-blue-200 px-4 py-3 text-sm text-gray-700 font-medium">
                            {row.seats}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="text-sm text-gray-600 text-center">
                  Showing {seatData.length} results
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
