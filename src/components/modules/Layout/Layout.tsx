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
      <div className="hidden md:block">
        <DashboardSideBar />
      </div>

      <DashboardMobileSidebar
        navItems={navItems}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex items-center gap-4 p-4  bg-white">
          <button onClick={() => setIsOpen(true)} className="md:hidden">
            <Menu size={22} />
          </button>

          <div className="flex-1">
            <DashboardNavbar />
          </div>
        </div>

        <main className="flex-1 overflow-y-auto bg-muted/10 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
