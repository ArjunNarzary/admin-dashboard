import { SideNav } from "@/components/SideNav"
import TopNav from "@/components/TopNav"
import React from "react"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen">
      <div className="w-[18%] bg-gray-200 h-screen">
        <SideNav />
      </div>
      <div className="flex-1">
        <TopNav />
        <div className="mx-4 bg-gray-50">{children}</div>
      </div>
    </main>
  )
}

export default layout
