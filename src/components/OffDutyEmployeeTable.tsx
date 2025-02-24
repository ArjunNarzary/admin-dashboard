"use client"
import WrapperHoc from "@/hoc/WrapperHoc"
import React from "react"
import TableHeader from "./TableHeader"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { DataTable } from "./DataTable"
import { EmployeeColumn, OffDutyEmployeeColumn } from "@/utils/columns"
import {
  EMPLOYEE_TABLE_DATA,
  OFF_DUTY_EMPLOYEE_TABLE_DATA,
} from "@/utils/constants"

const OffDutyEmployeeTable = () => {
  return (
    <div>
      <TableHeader title="Off Duty Employee(1)">
        <Select>
          <SelectTrigger className="w-[4.5rem] h-8 rounded-full text-xs">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent className="text-xs">
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="old">Old</SelectItem>
            <SelectItem value="all">All</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[4.5rem] h-8 rounded-full text-xs">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent className="text-xs">
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="old">Old</SelectItem>
            <SelectItem value="all">All</SelectItem>
          </SelectContent>
        </Select>
      </TableHeader>
      <div className="pt-2">
        <DataTable
          columns={OffDutyEmployeeColumn}
          data={OFF_DUTY_EMPLOYEE_TABLE_DATA}
        />
      </div>
    </div>
  )
}

export default WrapperHoc(OffDutyEmployeeTable)
