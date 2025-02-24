import React from "react"
import { Progress } from "./ui/progress"
import { cn } from "@/lib/utils"

const CustomProgressBar = ({
  title,
  current,
  total,
  classNames,
}: {
  title: string
  current: number
  total: number
  classNames?: string
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
        className={cn("h-3 w-full", classNames)}
      />
    </div>
  )
}

export default CustomProgressBar
