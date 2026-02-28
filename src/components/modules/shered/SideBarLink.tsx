import {
  BarChart2,
  Calendar,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Package,
  Settings,
  Users,
} from "lucide-react";
import React from "react";
import type { NavItem } from "../../../lib/navItems.config";
import { NavLink } from "react-router-dom";

const iconMap: Record<string, React.ReactNode> = {
  Dashboard: <LayoutDashboard size={20} />,
  Products: <Package size={20} />,
  Calendar: <Calendar size={20} />,
  Analytics: <BarChart2 size={20} />,
  Users: <Users size={20} />,
  Settings: <Settings size={20} />,
  Help: <HelpCircle size={20} />,
  Logout: <LogOut size={20} />,
};

const SideBarLink = ({ item }: { item: NavItem }) => {
  const hasBadge = item.title === "Products";

  return (
    <NavLink
      to={item.href}
      className={({ isActive }) => `
        relative flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group
        ${
          isActive
            ? " text-gray-800  "
            : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        }
      `}
    >
      {({ isActive }) => (
        <>
          <div className="flex items-center gap-3 z-10">
            <span
              className={`${isActive ? "text-green-800" : "text-gray-400 group-hover:text-gray-600"}`}
            >
              {iconMap[item.title] || <LayoutDashboard size={20} />}
            </span>

            <span className="text-[14px] font-medium">{item.title}</span>
          </div>

          <div className="flex items-center gap-2">
            {hasBadge && (
              <span
                className={`text-[10px] px-2 py-0.5 rounded-md border ${
                  isActive
                    ? "bg-white/10 border-white/20 text-white"
                    : "bg-[#1B4D3E] text-white border-gray-700"
                }`}
              >
                12+
              </span>
            )}
          </div>
        </>
      )}
    </NavLink>
  );
};

export default SideBarLink;
