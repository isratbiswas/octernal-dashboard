import { useState } from "react";
import { Menu } from "lucide-react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../shered/DashboardNavber";
import DashboardSideBar from "../shered/DashboardSideBar";
import DashboardMobileSidebar from "../shered/DashboardMobileSidebar";
import { getNavItems } from "../../../lib/navItems.config";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = getNavItems();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <DashboardSideBar />
      </div>

      {/* Mobile Sidebar */}
      <DashboardMobileSidebar
        navItems={navItems}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* 🔥 Top Navbar (All Screen) */}
        <div className="flex items-center gap-4 p-4  bg-white">
          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(true)} className="md:hidden">
            <Menu size={22} />
          </button>

          {/* Navbar Content */}
          <div className="flex-1">
            <DashboardNavbar />
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-muted/10 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
