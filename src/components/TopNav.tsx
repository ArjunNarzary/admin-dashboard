import {
  BellIcon,
  LogOutIcon,
  MessageSquareTextIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react"
import React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ISideNavItem, NAVBAR_TABS } from "@/utils/constants"
import { cn } from "@/lib/utils"

const TopNav = () => {
  return (
    <div className="px-4">
      <div className="flex justify-end items-center gap-3 py-4">
        <div className="w-10 h-10 flex justify-center items-center bg-gray-300 hover:bg-gray-400 rounded-full">
          <MessageSquareTextIcon className="w-4 h-4" />
        </div>
        <div className="w-10 h-10 flex justify-center items-center bg-gray-300 hover:bg-gray-400 rounded-full relative">
          <div className="w-5 h-5 rounded-full bg-red-500 flex justify-center items-center absolute -top-1 -right-1">
            <span className="text-[0.5rem] font-semibold text-white">99</span>
          </div>
          <BellIcon className="w-4 h-4" />
        </div>
        <ProfileDropdown>
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </ProfileDropdown>
      </div>
      <div className="flex justify-start items-center gap-1">
        {NAVBAR_TABS.map((item) => (
          <NavbarTab key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default TopNav

const ProfileDropdown = ({ children }: { children: React.ReactNode }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-4" sideOffset={10}>
        <DropdownMenuLabel>
          <div className="flex justify-start items-center gap-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-sm font-semibold">John Doe</h1>
              <h2 className="text-xs text-gray-400 leading-3">
                johndoe@gmail.com
              </h2>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserIcon />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SettingsIcon />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-700">
          <LogOutIcon />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const NavbarTab = ({ item }: { item: ISideNavItem }) => {
  const Icon = item.icon
  return (
    <div
      className={cn(
        "flex justify-center items-center gap-1 px-4 py-2 text-gray-500 hover:text-black rounded-t-lg font-semibold text-sm cursor-pointer",
        item.selected && "bg-gray-50 text-black"
      )}
    >
      <Icon className="w-5 h-5" />
      <h3>{item.name}</h3>
    </div>
  )
}
