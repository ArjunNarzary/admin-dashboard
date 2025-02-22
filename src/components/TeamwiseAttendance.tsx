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
        <CustomProgressBar title="Bond" current={2} total={5} color="violet" />
        <CustomProgressBar title="Default" current={0} total={1} color="red" />
        <CustomProgressBar
          title="Alpha"
          current={9}
          total={10}
          color="orange"
        />
      </CardContent>
    </Card>
  )
}

export default TeamwiseAttendance
