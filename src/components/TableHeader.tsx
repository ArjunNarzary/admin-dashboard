import { SearchIcon } from "lucide-react"
import React from "react"
import { Input } from "./ui/input"

const TableHeader = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) => {
  return (
    <div className="flex justify-between items-center text-sm">
      <h1 className="font-semibold">{title}</h1>
      <div className="flex justify-end items-center gap-2">
        {children}
        <div className="relative">
          <SearchIcon className="size-4 absolute top-[0.5rem] left-2 text-gray-600" />
          <Input
            className="pl-7 bg-gray-50 text-xs h-8 w-[12rem]"
            type="text"
            placeholder="Search Here"
          />
        </div>
      </div>
    </div>
  )
}

export default TableHeader
