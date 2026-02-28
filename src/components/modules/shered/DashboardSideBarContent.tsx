import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/useAuth";
import type { NavItem } from "../../../lib/navItems.config";
import SideBarLink from "./SideBarLink";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { AppWindow, LogOut } from "lucide-react";

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
        <p className="text-[10px] font-bold ml-5 text-gray-400 tracking-[0.2em] mb-4">
          MENU
        </p>
        <nav className="space-y-1 mb-8">
          {menuItems.map((item) => (
            <SideBarLink key={item.title} item={item} />
          ))}
        </nav>

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

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-[240px] aspect-[4/5] rounded-[2.5rem] bg-[#02130a] p-6 text-white shadow-2xl overflow-hidden flex flex-col justify-between border border-white/5"
      >
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1b4332] rounded-full blur-[80px] opacity-40 translate-x-1/4 -translate-y-1/4" />

          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 w-full h-full opacity-30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M -50 180 Q 50 20 250 180"
              fill="none"
              stroke="#2d6a4f"
              strokeWidth="0.5"
              animate={{
                d: [
                  "M -50 180 Q 50 20 250 180",
                  "M -50 160 Q 100 0 250 160",
                  "M -50 180 Q 50 20 250 180",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M -50 200 Q 80 50 250 200"
              fill="none"
              stroke="#52b788"
              strokeWidth="0.5"
              animate={{
                d: [
                  "M -50 200 Q 80 50 250 200",
                  "M -50 180 Q 120 20 250 180",
                  "M -50 200 Q 80 50 250 200",
                ],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {[...Array(5)].map((_, i) => (
              <path
                key={i}
                d={`M -20 ${200 + i * 10} Q ${50 + i * 20} ${50 - i * 10} 220 ${180 - i * 10}`}
                fill="none"
                stroke="#2d6a4f"
                strokeWidth="0.2"
                opacity={0.5 - i * 0.1}
              />
            ))}
          </svg>

          <div className="absolute inset-0 bg-gradient-to-t from-[#02130a] via-transparent to-transparent" />
        </div>

        <div className="relative z-10">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
            <AppWindow size={20} className="text-[#1b4332]" />
          </div>
        </div>

        <div className="relative z-10">
          <h3 className="text-2xl font-medium leading-[1.1] tracking-tight mb-2">
            Download our <br />
            <span className="font-bold text-white/90">Mobile App</span>
          </h3>
          <p className="text-[11px] text-emerald-400/60 font-medium mb-6">
            Get easy in another way
          </p>

          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#2d6a4f" }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-[#1b4332] rounded-2xl text-sm font-bold tracking-wide text-emerald-100 shadow-[0_10px_20px_rgba(0,0,0,0.3)] border border-white/5 transition-colors"
          >
            Download
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardSideBarContent;
