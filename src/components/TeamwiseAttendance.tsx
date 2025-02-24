import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"
import CustomProgressBar from "./CustomProgressBar"

const TeamwiseAttendance = () => {
  return (
    <Card className="flex flex-col max-h-[17.5rem]">
      <CardHeader className="items-left p-3">
        <CardTitle className="flex justify-start items-center gap-3">
          <h1>Teamwise Attendence</h1>
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="py-4 mb-4 h-full overflow-y-auto space-y-3">
        <CustomProgressBar
          title="Bond"
          current={2}
          total={5}
          classNames="bg-violet-100 [&>*]:bg-violet-500"
        />
        <CustomProgressBar
          title="Default"
          current={0}
          total={1}
          classNames="bg-red-100 [&>*]:bg-red-500"
        />
        <CustomProgressBar
          title="Alpha"
          current={9}
          total={10}
          classNames="bg-orange-100 [&>*]:bg-orange-500"
        />
      </CardContent>
    </Card>
  )
}

export default TeamwiseAttendance
