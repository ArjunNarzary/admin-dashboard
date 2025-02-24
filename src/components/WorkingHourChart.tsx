"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { Card, CardContent } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import ChartHeader from "./ChartHeader"
import { Separator } from "./ui/separator"
const chartData = [
  { days: "03-02", first: 0, second: 0, third: 0 },
  { days: "06-02", first: 1, second: 0.8, third: 0.3 },
  { days: "09-02", first: 0, second: 0, third: 0 },
  { days: "12-02", first: 0.9, second: 0.1, third: 1.4 },
  { days: "15-02", first: 0.01, second: 0, third: 0 },
  { days: "18-02", first: 0.1, second: 0, third: 0 },
  { days: "21-02", first: 0, second: 0, third: 0 },
  { days: "24-02", first: 0, second: 0, third: 0 },
]

const chartConfig = {
  first: {
    label: "First",
    color: "hsl(var(--chart-1))",
  },
  second: {
    label: "Second",
    color: "hsl(var(--chart-2))",
  },
  third: {
    label: "Third",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export default function WorkingHourChart() {
  return (
    <Card>
      <ChartHeader header="Daily Average Working Hours" showDropdown={true} />
      <Separator />
      <CardContent className="px-0 pt-1">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="days"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="first" fill="var(--color-first)" radius={4} />
            <Bar dataKey="second" fill="var(--color-second)" radius={4} />
            <Bar dataKey="third" fill="var(--color-third)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
