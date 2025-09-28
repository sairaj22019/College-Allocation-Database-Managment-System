import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Grid3X3 } from "lucide-react"

export default function SeatMatrixPage() {
  return (
    <div className="space-y-6">
      <Card className="border-blue-200">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <Grid3X3 className="h-5 w-5" />
            Seat Matrix
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-center py-12">
            <Grid3X3 className="h-16 w-16 text-blue-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Seat Matrix</h3>
            <p className="text-gray-600">View available seats by college and department</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
