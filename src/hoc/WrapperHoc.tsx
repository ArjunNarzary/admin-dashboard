"use client"

import { Card, CardContent } from "@/components/ui/card"
import React from "react"

const WrapperHoc = (Component: React.FC) =>
  function HOC() {
    return (
      <Card className="relative w-full h-[80rem] py-4">
        <CardContent>
          <Component />
        </CardContent>
      </Card>
    )
  }

export default WrapperHoc
