import { Search, Mail, Bell } from "lucide-react";

const DashboardNavbar = () => {
  return (
    <div className="w-full py-4 px-6">
      <div className="bg-[#F8F9FA] rounded-[32px] px-6 py-3 flex items-center justify-between shadow-sm border border-gray-50">
        <div className="flex-1 max-w-md">
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search task"
              className="w-full bg-white border-none rounded-full py-3 pl-12 pr-12 text-sm text-gray-600 focus:ring-2 focus:ring-[#1B4D3E]/10 placeholder-gray-400 transition-all"
            />

            <div className="absolute inset-y-0 right-3 flex items-center">
              <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-gray-500 bg-gray-100 rounded-lg border border-gray-200">
                <span className="text-xs">⌘</span> F
              </kbd>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 ml-4">
          <button className="p-3 bg-white text-gray-500 rounded-full hover:bg-gray-50 hover:text-[#1B4D3E] transition-all border border-gray-50 shadow-sm">
            <Mail size={20} />
          </button>

          <button className="p-3 bg-white text-gray-500 rounded-full hover:bg-gray-50 hover:text-[#1B4D3E] transition-all border border-gray-50 shadow-sm relative">
            <Bell size={20} />

            <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
          </button>

          <div className="flex items-center gap-3 pl-2 ml-2 border-l border-gray-200">
            <div className="relative">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
                alt="User Avatar"
                className="w-10 h-10 rounded-full bg-red-200 object-cover"
              />
            </div>
            <div className="hidden md:block">
              <h4 className="text-sm font-bold text-gray-800 leading-tight">
                Totok Michael
              </h4>
              <p className="text-[11px] text-gray-400 font-medium">
                tmichael20@mail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
