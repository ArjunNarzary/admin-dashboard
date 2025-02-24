import { ColumnDef } from "@tanstack/react-table"
import { IEmployeeTableData, IOffDutyEmployeeTableData } from "./constants"
import { getFirstTwoChars } from "@/lib/utils"

export const EmployeeColumn: ColumnDef<IEmployeeTableData>[] = [
  {
    accessorKey: "employee",
    header: "Employee",
    cell: ({ row }) => {
      const employee = row.getValue(
        "employee"
      ) as IEmployeeTableData["employee"]

      const getTwoChar = getFirstTwoChars(employee.name)

      return (
        <div className="flex justify-start items-center gap-2">
          <div className="flex justify-center items-center w-9 h-9 rounded-full bg-gray-500">
            <span className="text-white">{getTwoChar}</span>
          </div>
          <div>
            <h1 className="text-xs font-semibold">{employee.name}</h1>
            {employee.employeeId ? (
              <h2 className="text-xs">({employee.employeeId})</h2>
            ) : (
              ""
            )}
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "attendence",
    header: "Attendence",
    cell: ({ row }) => {
      const attendence = row.getValue(
        "attendence"
      ) as IEmployeeTableData["attendence"]

      const neverMarkedAttendence =
        attendence?.punchedIn || attendence?.punchedOut ? false : true
      return (
        <div>
          {neverMarkedAttendence ? (
            <h1 className="font-semibold">Never Marked Attandance</h1>
          ) : (
            <>
              {attendence?.punchedIn && (
                <h1>
                  <span className="font-semibold">Panched In:</span>
                  {attendence.punchedIn}
                </h1>
              )}
              {attendence?.punchedOut && (
                <h1>
                  <span className="font-semibold">Panched Ount:</span>
                  {attendence.punchedOut}
                </h1>
              )}
              {attendence?.from && (
                <h1>
                  <span>From:</span>
                  {attendence.from}
                </h1>
              )}
            </>
          )}
        </div>
      )
    },
  },
  {
    accessorKey: "lastLocation",
    header: "Last Location",
    maxSize: 20,
    enableResizing: true,
    cell: ({ row }) => {
      const lastLocation = row.getValue(
        "lastLocation"
      ) as IEmployeeTableData["lastLocation"]

      return (
        <>
          {lastLocation?.location ? (
            <div>
              <p className="line-clamp-3 text-xs">{lastLocation.location}</p>
              {lastLocation?.cretedAt && (
                <p className="text-xs">{lastLocation.cretedAt}</p>
              )}
            </div>
          ) : (
            <h1 className="font-semibold">NA</h1>
          )}
        </>
      )
    },
  },
]

export const OffDutyEmployeeColumn: ColumnDef<IOffDutyEmployeeTableData>[] = [
  {
    accessorKey: "employee",
    header: "Employee",
    cell: ({ row }) => {
      const employee = row.getValue(
        "employee"
      ) as IEmployeeTableData["employee"]

      const getTwoChar = getFirstTwoChars(employee.name)

      return (
        <div className="flex justify-start items-center gap-2">
          <div className="flex justify-center items-center w-9 h-9 rounded-full bg-gray-500">
            <span className="text-white">{getTwoChar}</span>
          </div>
          <div>
            <h1 className="text-xs font-semibold">{employee.name}</h1>
            {employee.employeeId ? (
              <h2 className="text-xs">({employee.employeeId})</h2>
            ) : (
              ""
            )}
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "teamName",
    header: "Team Name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]
