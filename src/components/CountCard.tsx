import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { CircleHelpIcon } from "lucide-react"
import { Separator } from "./ui/separator"

interface ICountCardProps {
  title: string
  tooltipText: string
  content: string
}

const CountCard = ({ title, tooltipText, content }: ICountCardProps) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-left p-3">
        <CardTitle className="flex justify-start items-center gap-3">
          <h1>{title}</h1>
          <Tooltip>
            <TooltipTrigger>
              <CircleHelpIcon className="size-4" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-medium">{tooltipText}</p>
            </TooltipContent>
          </Tooltip>
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="flex justify-center items-center pb-0 h-full">
        <h1 className="text-2xl font-bold">{content}</h1>
      </CardContent>
    </Card>
  )
}

export default CountCard
