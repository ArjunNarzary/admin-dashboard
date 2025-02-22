import React from "react"
import { Progress } from "./ui/progress"

const CustomProgressBar = ({
  title,
  current,
  total,
  color,
}: {
  title: string
  current: number
  total: number
  color: string
}) => {
  const progressPercentage = Math.abs((current / total) * 100)
  return (
    <div className="w-full">
      <div className="flex justify-between items-center px-1 text-sm font-semibold">
        <span>{title}</span>
        <span>
          {current}/{total}
        </span>
      </div>
      <Progress
        value={progressPercentage}
        className={`h-3 w-full bg-${color}-100 [&>*]:bg-${color}-500`}
      />
    </div>
  )
}

export default CustomProgressBar
