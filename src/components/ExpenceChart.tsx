"use client"
import { CircleIcon } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { cn } from "@/lib/utils"
import { Separator } from "./ui/separator"
import ChartHeader from "./ChartHeader"

const chartData = [
  {
    expense: "totalExpense",
    amount: 1000,
    fill: "var(--color-totalExpense)",
  },
]
const chartConfig = {
  amount: {
    label: "Expenses",
  },
  totalExpense: {
    label: "100%",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function ExpenseChart() {
  return (
    <Card className="flex flex-col">
      <ChartHeader header="Expense Overview" showDropdown={true} />
      <Separator />
      <CardContent className="flex-1 pb-0 pt-2 flex flex-col-reverse md:flex-row justify-between1 items-center1">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="amount" hideLabel />}
            />
            <Pie data={chartData} dataKey="amount">
              <LabelList
                dataKey="expense"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="grid grid-cols-2 gap-2 h-[60%] text-xs">
          <RenderExpences
            title="Total Expenses"
            amount="38.06 (6)"
            iconsClass="text-blue-500 bg-blue-500"
          />
          <RenderExpences
            title="Pending Expenses"
            amount="38.06 (6)"
            iconsClass="text-orange-500 bg-orange-500"
          />
          <RenderExpences
            title="Approved Expenses"
            amount="0 (0)"
            iconsClass="text-green-500 bg-green-500"
          />
          <RenderExpences
            title="Rejected Expenses"
            amount="0 (0)"
            iconsClass="text-red-500 bg-red-500"
          />
          <RenderExpences title="Paid Out" amount="0 (0)" />
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  )
}

const RenderExpences = ({
  title,
  amount,
  iconsClass,
}: {
  title: string
  amount: string
  iconsClass?: string
}) => {
  return (
    <div>
      <h1 className="flex justify-start items-center gap-1 font-semibold">
        <CircleIcon
          className={cn(
            "size-2 bg-gray-500 text-gray-500 border-none rounded-full",
            iconsClass
          )}
        />
        {title}
      </h1>
      <p>₹ {amount}</p>
    </div>
  )
}
