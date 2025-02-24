"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Maximize2Icon, Minimize2Icon } from "lucide-react"
import React, { useState } from "react"

const WrapperHoc = (Component: React.FC) =>
  function HOC() {
    const [expanded, setExpanded] = useState(false)
    return (
      <Card className="relative w-full h-[80rem] rounded-md py-4">
        <div
          className="absolute -top-10 left-10 cursor-pointer bg-blue-300"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? (
            <Minimize2Icon className="w-4 text-gray-600" />
          ) : (
            <Maximize2Icon className="w-4 text-gray-600" />
          )}
        </div>
        <CardContent>
          <Component />
        </CardContent>
      </Card>
    )
  }

export default WrapperHoc
