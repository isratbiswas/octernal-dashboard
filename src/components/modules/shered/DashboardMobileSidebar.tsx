import { X } from "lucide-react";
import type { NavItem } from "../../../lib/navItems.config";
import DashboardSideBarContent from "./DashboardSideBarContent";

type Props = {
  navItems: NavItem[];
  isOpen: boolean;
  onClose: () => void;
};

const DashboardMobileSidebar = ({ navItems, isOpen, onClose }: Props) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 md:hidden
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-white p-1 rounded-full shadow"
          >
            <X size={18} />
          </button>

          <DashboardSideBarContent navItems={navItems} />
        </div>
      </div>
    </>
  );
};

export default DashboardMobileSidebar;
