import CountCard from "@/components/CountCard"
import EmployeesTable from "@/components/EmployeesTable"
import ExpenseChart from "@/components/ExpenceChart"
import OffDutyEmployeeTable from "@/components/OffDutyEmployeeTable"
import OthersCardContainer from "@/components/OthersCardContainer"
import { RealTimeStatus } from "@/components/RealTimeStatus"
import TaskStatusOverview from "@/components/TaskStatusOverview"
import TeamwiseAttendance from "@/components/TeamwiseAttendance"
import { Button } from "@/components/ui/button"
import { TooltipProvider } from "@/components/ui/tooltip"
import WorkingHourChart from "@/components/WorkingHourChart"
import { DownloadIcon } from "lucide-react"

export default function Home() {
  return (
    <main className="p-0 md:p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Realtime Dashboard</h1>
        <Button className="bg-gray-500 p-1 px-3">
          <DownloadIcon />
          <span className="hidden md:block">Attendence Status</span>
        </Button>
      </div>
      <TooltipProvider>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <RealTimeStatus />
            <div className="grid grid-cols-1 gap-2">
              <CountCard
                title="Punched In (Inactive) Employees"
                tooltipText="Punched In (Inactive) Employees"
                content="3"
              />
              <CountCard
                title="Staffing Strength"
                tooltipText="Staffing Strength"
                content="0/0"
              />
            </div>
          </div>
          <TeamwiseAttendance />
          <EmployeesTable />
          <OffDutyEmployeeTable />
          <OthersCardContainer />
          <ExpenseChart />
          <WorkingHourChart />
          <TaskStatusOverview />
        </div>
      </TooltipProvider>
    </main>
  )
}
