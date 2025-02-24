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
import { EmployeeColumn } from "@/utils/columns"
import { EMPLOYEE_TABLE_DATA } from "@/utils/constants"

const EmployeesTable = () => {
  return (
    <div>
      <TableHeader title="Employees (9)">
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
        <DataTable columns={EmployeeColumn} data={EMPLOYEE_TABLE_DATA} />
      </div>
    </div>
  )
}

export default WrapperHoc(EmployeesTable)
