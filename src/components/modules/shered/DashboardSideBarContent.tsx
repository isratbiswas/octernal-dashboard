import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/useAuth";
import type { NavItem } from "../../../lib/navItems.config";
import SideBarLink from "./SideBarLink";
import toast from "react-hot-toast";
import { LogOut } from "lucide-react";

type NavItemProps = {
  navItems: NavItem[];
};

const DashboardSideBarContent = ({ navItems }: NavItemProps) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/login");
  };
  const menuItems = navItems.filter((item) =>
    ["Dashboard", "Products", "Calendar", "Analytics", "Users"].includes(
      item.title,
    ),
  );
  const generalItems = navItems.filter((item) =>
    ["Settings", "Help", "Logout"].includes(item.title),
  );
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col p-6 font-sans">
      <div className="flex ml-5 items-center gap-2 mb-10">
        <div className="w-8 h-8 bg-[#1B4D3E] rounded-full flex items-center justify-center p-1.5">
          <div className="w-full h-full border-2 border-white rounded-full border-t-transparent" />
        </div>
        <span className="text-xl font-bold text-gray-800 tracking-tight">
          Donezo
        </span>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* MENU SECTION */}
        <p className="text-[10px] font-bold ml-5 text-gray-400 tracking-[0.2em] mb-4">
          MENU
        </p>
        <nav className="space-y-1 mb-8">
          {menuItems.map((item) => (
            <SideBarLink key={item.title} item={item} />
          ))}
        </nav>

        {/* GENERAL SECTION */}
        <p className="text-[10px] ml-5 font-bold text-gray-400 tracking-[0.2em] mb-4">
          GENERAL
        </p>
        <nav className="space-y-1">
          {generalItems.map((item) => (
            <SideBarLink key={item.title} item={item} />
          ))}
        </nav>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all w-full mt-1"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>
      {/* Download App Card */}
      <div className="bg-[#0A1F1A] rounded-2xl p-4 relative overflow-hidden mt-auto">
        <div className="relative z-10">
          <p className="text-white text-sm font-medium leading-tight mb-3">
            Download our <br /> <span className="font-bold">Mobile App</span>
          </p>
          <p className="text-[10px] text-gray-400 mb-4">
            Get easy in another way
          </p>
          <button className="w-full py-2 bg-[#2D6A4F] text-white text-xs rounded-lg font-medium hover:bg-[#1B4D3E] transition-colors">
            Download
          </button>
        </div>
        {/* Background Decorative Circles */}
        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#1B4D3E] rounded-full opacity-50 blur-xl"></div>
      </div>
    </div>
  );
};

export default DashboardSideBarContent;
