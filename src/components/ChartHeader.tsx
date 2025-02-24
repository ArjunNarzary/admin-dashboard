import React from "react"
import { CardHeader, CardTitle } from "./ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

const ChartHeader = ({
  header,
  showDropdown = false,
}: {
  header: string
  showDropdown?: boolean
}) => {
  return (
    <CardHeader className="flex flex-row justify-between items-center py-3 space-y-0">
      <CardTitle>{header}</CardTitle>
      {showDropdown && (
        <Select>
          <SelectTrigger className="w-[8.5rem] h-7 rounded-full text-xs border-gray-500 font-semibold">
            <SelectValue placeholder="This Month" className="text-xs" />
          </SelectTrigger>
          <SelectContent className="text-xs">
            <SelectItem value="this month">This Month</SelectItem>
            <SelectItem value="previous month">Previous Month</SelectItem>
            <SelectItem value="all">All</SelectItem>
          </SelectContent>
        </Select>
      )}
    </CardHeader>
  )
}

export default ChartHeader
