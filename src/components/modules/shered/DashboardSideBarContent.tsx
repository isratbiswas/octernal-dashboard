import type { NavItem } from "../../../lib/navItems.config";
import SideBarLink from "./SideBarLink";

type NavItemProps = {
  navItems: NavItem[];
};

const DashboardSideBarContent = ({ navItems }: NavItemProps) => {
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
      <div className="flex items-center gap-2 mb-10">
        <div className="w-8 h-8 bg-[#1B4D3E] rounded-full flex items-center justify-center p-1.5">
          <div className="w-full h-full border-2 border-white rounded-full border-t-transparent" />
        </div>
        <span className="text-xl font-bold text-gray-800 tracking-tight">
          Donezo
        </span>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* MENU SECTION */}
        <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] mb-4">
          MENU
        </p>
        <nav className="space-y-1 mb-8">
          {menuItems.map((item) => (
            <SideBarLink key={item.title} item={item} />
          ))}
        </nav>

        {/* GENERAL SECTION */}
        <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] mb-4">
          GENERAL
        </p>
        <nav className="space-y-1">
          {generalItems.map((item) => (
            <SideBarLink key={item.title} item={item} />
          ))}
        </nav>
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
      {/* <ul>
        {navItems.map((item) => (
          <li key={item.href}>{item.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default DashboardSideBarContent;
