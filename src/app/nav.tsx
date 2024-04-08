import Link from "next/link";
import {
  CalendarIcon,
  HomeIcon,
  MessageSquareIcon,
  PackageIcon,
  SettingsIcon,
  SlidersIcon,
  UserIcon,
  UsersIcon,
} from "./icons";

export default function NavLinks() {
  return (
    <nav className="flex flex-col h-[calc(100vh-4rem)] w-16 min-h-[400px] border-r border-gray-200 px-2 py-4 shrink-0 gap-4 md:flex-row md:w-64 xl:w-80/60 2xl:w-96/60 border-gray-200 dark:border-gray-800">
      <div className="flex items-center space-y-0.5">
        <Link href="#" className="flex w-full items-center">
          <PackageIcon className="w-6 h-6" />
          <span className="sr-only">Logo</span>
        </Link>
      </div>
      <div className="flex-1 flex flex-col justify-between min-h-0">
        <div className="flex-1 grid flex-auto min-h-0 shrink-0 items-start gap-4">
          <NavLink href="#">
            <HomeIcon className="mr-2 h-4 w-4" />
            Home
          </NavLink>
          <NavLink href="#">
            <SlidersIcon className="mr-2 h-4 w-4" />
            Dashboard
          </NavLink>
          <NavLink href="#">
            <UsersIcon className="mr-2 h-4 w-4" />
            Team
          </NavLink>
          <NavLink href="#">
            <PackageIcon className="mr-2 h-4 w-4" />
            Projects
          </NavLink>
          <NavLink href="#">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Calendar
          </NavLink>
          <NavLink href="#">
            <MessageSquareIcon className="mr-2 h-4 w-4" />
            Messages
          </NavLink>
          <NavLink href="#">
            <SettingsIcon className="mr-2 h-4 w-4" />
            Settings
          </NavLink>
          <NavLink href="#">
            <UserIcon className="mr-2 h-4 w-4" />
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link href={href}>
      <a className="inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100/50 focus:bg-gray-100/50 focus:outline-none">
        {children}
      </a>
    </Link>
  );
}
