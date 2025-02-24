import React from "react"
import Image from "next/image"
import { ISideNavItem, SIDENAV } from "@/utils/constants"
import { cn } from "@/lib/utils"

export const SideNav = () => {
  return (
    <div className="p-4">
      <div className="flex justify-center md:justify-start items-start gap-2">
        <Image
          width={100}
          height={100}
          className="hidden md:block"
          src="/unolo_logo.webp"
          alt="unolo"
        />
        <Image
          width={30}
          height={30}
          className="md:hidden"
          src="/unolo_logo_single.png"
          alt="unolo"
        />
        <span className="hidden md:inline font-bold text-xs">Pro</span>
      </div>
      <div className="flex flex-col gap-y-2 pt-6 text-md">
        {SIDENAV.map((item) => {
          return <SideMenu key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}

const SideMenu = ({ item }: { item: ISideNavItem }) => {
  const Icon = item.icon
  return (
    <div
      className={cn(
        "flex justify-center md:justify-start items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-500 hover:text-white",
        item.selected && "bg-blue-500 text-white"
      )}
    >
      <Icon className="w-4 h-4" />
      <h1 className="hidden md:block">{item.name}</h1>
    </div>
  )
}
