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

export interface IEmployeeTableData {
  id: string
  employee: {
    name: string
    img?: string
    employeeId?: string
  }
  attendence?: {
    punchedIn?: string
    punchedOut?: string
    from?: string
  }
  lastLocation?: {
    location: string
    cretedAt?: string
  }
}

export const EMPLOYEE_TABLE_DATA: IEmployeeTableData[] = [
  {
    id: "1",
    employee: {
      name: "Kumar Viswas",
    },
  },
  {
    id: "2",
    employee: {
      name: "Mayur Tyagi",
    },
    attendence: {
      punchedIn: "Today at 5:14 PM",
      from: "Unolo",
    },
    lastLocation: {
      location:
        "514 The Palm Springs Plazza, Golf Course Rd, DLF Phase 5, Sector 54, Gurugram, Haryana 122102",
      cretedAt: "7 hours ago",
    },
  },
  {
    id: "3",
    employee: {
      name: "Mohan Bishnoi",
      employeeId: "123",
    },
    attendence: {
      punchedOut: "19-12-2024",
    },
    lastLocation: {
      location: "Vikas Marg, South City II, Sector 49, Gurugram",
      cretedAt: "2 months ago",
    },
  },
  {
    id: "4",
    employee: {
      name: "Om Bhagwan",
    },
    attendence: {
      punchedIn: "Today at 4:27 PM",
      from: "Unolo",
    },
    lastLocation: {
      location:
        "514 The Palm Springs Plazza, Golf Course Rd, DLF Phase 5, Sector 54, Gurugram, Haryana 122102",
      cretedAt: "7 hours ago",
    },
  },
  {
    id: "5",
    employee: {
      name: "Kumar Viswas",
    },
  },
  {
    id: "6",
    employee: {
      name: "Mayur Tyagi",
    },
    attendence: {
      punchedIn: "Today at 5:14 PM",
      from: "Unolo",
    },
    lastLocation: {
      location:
        "514 The Palm Springs Plazza, Golf Course Rd, DLF Phase 5, Sector 54, Gurugram, Haryana 122102",
      cretedAt: "7 hours ago",
    },
  },
  {
    id: "7",
    employee: {
      name: "Mohan Bishnoi",
      employeeId: "123",
    },
    attendence: {
      punchedOut: "19-12-2024",
    },
    lastLocation: {
      location: "Vikas Marg, South City II, Sector 49, Gurugram",
      cretedAt: "2 months ago",
    },
  },
  {
    id: "8",
    employee: {
      name: "Om Bhagwan",
    },
    attendence: {
      punchedIn: "Today at 4:27 PM",
      from: "Unolo",
    },
    lastLocation: {
      location:
        "514 The Palm Springs Plazza, Golf Course Rd, DLF Phase 5, Sector 54, Gurugram, Haryana 122102",
      cretedAt: "7 hours ago",
    },
  },
]

export interface IOffDutyEmployeeTableData {
  id: string
  employee: {
    name: string
    img?: string
    employeeId?: string
  }
  teamName: string
  status: string
}

export const OFF_DUTY_EMPLOYEE_TABLE_DATA: IOffDutyEmployeeTableData[] = [
  {
    id: "1",
    employee: {
      name: "Rahul Singh",
    },
    teamName: "Deafult",
    status: "Weekly Off",
  },
]
