import { auth } from "@/auth"
import { SideNav } from "@/components/SideNav"
import TopNav from "@/components/TopNav"
import { redirect } from "next/navigation"
import React from "react"

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth()
  if (!session) {
    redirect("/login")
  }
  return (
    <main className="flex items-start justify-between max-h-screen">
      <div className="w-[15%] bg-gray-200 min-h-screen h-full overflow-y-auto">
        <SideNav />
      </div>
      <div className="flex-1 max-h-screen overflow-y-auto">
        <TopNav />
        <div className="mx-4 bg-gray-50">{children}</div>
      </div>
    </main>
  )
}

export default layout
