"use client"

import { CircleHelpIcon, CircleIcon } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Separator } from "./ui/separator"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

const chartData = [{ punchedIn: 3, punchedOut: 6 }]

const chartConfig = {
  punchedIn: {
    label: "Punched In",
    color: "hsl(var(--chart-2))",
  },
  punchedOut: {
    label: "Punched Out",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function RealTimeStatus() {
  const totalVisitors = 9

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-left p-3 py-4">
        <CardTitle className="flex justify-start items-center gap-3">
          <h1>Real Time Status</h1>
          <Tooltip>
            <TooltipTrigger>
              <CircleHelpIcon className="size-4" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-medium">Real time status</p>
            </TooltipContent>
          </Tooltip>
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col items-center pb-0">
        <div className="flex justify-between items-center pt-4 gap-6">
          <div>
            <div className="flex justify-center items-center gap-2">
              <CircleIcon className="w-2 h-2 bg-[hsl(var(--chart-2))] stroke-none rounded-full" />
              <span className="text-xs font-semibold">3</span>
            </div>
            <h3 className="text-xs font-semibold">Punched In</h3>
          </div>
          <div>
            <div className="flex justify-center items-center gap-2">
              <CircleIcon className="w-2 h-2 bg-[hsl(var(--chart-1))] stroke-none rounded-full" />
              <span className="text-xs font-semibold">6</span>
            </div>
            <h3 className="text-xs font-semibold">Punched Out</h3>
          </div>
        </div>
        <ChartContainer
          config={chartConfig}
          className="m-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
            cy={"60%"}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          All Employees
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="punchedOut"
              fill="var(--color-punchedOut)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="punchedIn"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-punchedIn)"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
