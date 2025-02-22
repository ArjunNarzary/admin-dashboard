import {
  BanknoteIcon,
  BookTextIcon,
  CalendarDaysIcon,
  CalendarRangeIcon,
  ChartNoAxesColumnIcon,
  ClipboardPlusIcon,
  FileCheckIcon,
  HistoryIcon,
  InfoIcon,
  LayoutDashboardIcon,
  LayoutGridIcon,
  LucideIcon,
  MapPinIcon,
  ShieldAlertIcon,
  TargetIcon,
  TruckIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react"

export interface ISideNavItem {
  id: number
  name: string
  icon: LucideIcon
  selected: boolean
}

export const SIDENAV: ISideNavItem[] = [
  {
    id: 1,
    name: "Dashboard",
    icon: LayoutGridIcon,
    selected: true,
  },
  {
    id: 2,
    name: "Attendence",
    icon: CalendarDaysIcon,
    selected: false,
  },
  {
    id: 3,
    name: "Leaves",
    icon: CalendarRangeIcon,
    selected: false,
  },
  {
    id: 4,
    name: "Organization",
    icon: UserIcon,
    selected: false,
  },
  {
    id: 5,
    name: "Tasks",
    icon: FileCheckIcon,
    selected: false,
  },
  {
    id: 6,
    name: "Beat",
    icon: CalendarRangeIcon,
    selected: false,
  },
  {
    id: 7,
    name: "Targets",
    icon: TargetIcon,
    selected: false,
  },
  {
    id: 8,
    name: "Form",
    icon: BookTextIcon,
    selected: false,
  },
  {
    id: 9,
    name: "Order",
    icon: TruckIcon,
    selected: false,
  },
  {
    id: 10,
    name: "Expenses",
    icon: BanknoteIcon,
    selected: false,
  },
  {
    id: 11,
    name: "Clients & Sites",
    icon: UsersIcon,
    selected: false,
  },
  {
    id: 12,
    name: "Reports",
    icon: ClipboardPlusIcon,
    selected: false,
  },
]

export const NAVBAR_TABS = [
  {
    id: 1,
    name: "Overview",
    icon: ChartNoAxesColumnIcon,
    selected: true,
  },
  {
    id: 2,
    name: "Live Location",
    icon: MapPinIcon,
    selected: false,
  },
  {
    id: 3,
    name: "Timeline",
    icon: HistoryIcon,
    selected: false,
  },
  {
    id: 4,
    name: "Card View",
    icon: LayoutDashboardIcon,
    selected: false,
  },
  {
    id: 5,
    name: "Compliance Status",
    icon: InfoIcon,
    selected: false,
  },
  {
    id: 6,
    name: "Site Attendence",
    icon: ShieldAlertIcon,
    selected: false,
  },
]
