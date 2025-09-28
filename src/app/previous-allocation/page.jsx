import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { History } from "lucide-react"

export default function PreviousAllocationPage() {
  return (
    <div className="space-y-6">
      <Card className="border-blue-200">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <History className="h-5 w-5" />
            Previous Seat Allocation
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-center py-12">
            <History className="h-16 w-16 text-blue-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Previous Allocations</h3>
            <p className="text-gray-600">View your allocation history</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
