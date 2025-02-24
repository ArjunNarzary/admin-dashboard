import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { ArrowUpIcon } from "lucide-react"
import { IUpdateCardData } from "./OthersCardContainer"
const UpdateCard = ({
  title,
  value,
  percentage,
  yesterday,
}: IUpdateCardData) => {
  return (
    <Card>
      <CardHeader className="space-y-1 py-4">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between items-center gap-2">
        <div className="flex justify-end items-end">
          <h1 className="text-5xl font-semibold leading-8">{value}</h1>
          <div className="flex justify-start items-center text-md text-green-700">
            <ArrowUpIcon className="w-4" />
            <span>{percentage}%</span>
          </div>
        </div>

        <h1 className="text-gray-600">
          <span className="font-semibold text-black">{yesterday} </span>
          Yesterday
        </h1>
      </CardContent>
    </Card>
  )
}

export default UpdateCard
