"use client"

import { CircleIcon } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import ChartHeader from "./ChartHeader"
import { Separator } from "./ui/separator"
import { cn } from "@/lib/utils"
const chartData = [
  {
    notYetStarted: 10,
    delayed: 2,
    inProgress: 5,
    completed: 10,
  },
]

const chartConfig = {
  notYetStarted: {
    label: "Not Yet Started",
    color: "hsl(var(--chart-3))",
    iconClasses: "bg-[hsl(var(--chart-3))] text-[hsl(var(--chart-3))]",
  },
  delayed: {
    label: "Delayed",
    color: "hsl(var(--chart-1))",
    iconClasses: "bg-[hsl(var(--chart-1))] text-[hsl(var(--chart-1))]",
  },
  inProgress: {
    label: "In Progress",
    color: "hsl(var(--chart-4))",
    iconClasses: "bg-[hsl(var(--chart-4))] text-[hsl(var(--chart-4))]",
  },
  completed: {
    label: "Completed",
    color: "hsl(var(--chart-2))",
    iconClasses: "bg-[hsl(var(--chart-2))] text-[hsl(var(--chart-2))]",
  },
} satisfies ChartConfig & {
  [x: string]: {
    iconClasses?: React.ReactNode
  }
}

export default function TaskStatusOverview() {
  const totalTasks =
    chartData[0].notYetStarted +
    chartData[0].delayed +
    chartData[0].inProgress +
    chartData[0].completed

  return (
    <Card className="flex flex-col">
      <ChartHeader header="Task Status Overview" />
      <Separator />
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-[3/2] w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
            cy={"80%"}
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
                          {totalTasks.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Total Tasks
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="notYetStarted"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-notYetStarted)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="delayed"
              fill="var(--color-delayed)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="inProgress"
              fill="var(--color-inProgress)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="completed"
              fill="var(--color-completed)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm w-full">
        {Object.entries(chartData[0]).map(([key, value]) => (
          <RenderTaskStatusCard
            key={key}
            value={value}
            id={key as keyof (typeof chartData)[0]}
          />
        ))}
      </CardFooter>
    </Card>
  )
}

const RenderTaskStatusCard = ({
  value,
  id,
}: {
  value: number
  id: keyof (typeof chartData)[0]
}) => {
  return (
    <div className="text-center">
      <div className="flex justify-center items-center gap-2">
        <CircleIcon
          className={cn("w-2 h-2 rounded-full", chartConfig[id].iconClasses)}
        />
        <span className="font-semibold">{value}</span>
      </div>
      <h1 className="leading-3">{chartConfig[id].label}</h1>
    </div>
  )
}
