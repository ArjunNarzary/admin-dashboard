import React from "react"
import UpdateCard from "./UpdateCard"

export interface IUpdateCardData {
  id: number
  title: string
  value: number
  percentage: number
  yesterday: number
}
const DATA: IUpdateCardData[] = [
  {
    id: 1,
    title: "Forms Filled",
    value: 0,
    percentage: 0,
    yesterday: 0,
  },
  {
    id: 2,
    title: "Photos Uploaded",
    value: 5,
    percentage: 400,
    yesterday: 1,
  },
  {
    id: 3,
    title: "New Clients",
    value: 0,
    percentage: 0,
    yesterday: 0,
  },
  {
    id: 4,
    title: "Orders Submitted",
    value: 0,
    percentage: 0,
    yesterday: 0,
  },
]

const OthersCardContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {DATA.map((item) => (
        <UpdateCard key={item.id} {...item} />
      ))}
    </div>
  )
}

export default OthersCardContainer
