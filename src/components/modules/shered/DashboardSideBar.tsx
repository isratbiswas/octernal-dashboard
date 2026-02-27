import { getNavItems } from "../../../lib/navItems.config";

import DashboardSideBarContent from "./DashboardSideBarContent";

const DashboardSideBar = () => {
  const navItems = getNavItems();
  return (
    <div className="">
      <DashboardSideBarContent navItems={navItems} />
    </div>
  );
};

export default DashboardSideBar;
