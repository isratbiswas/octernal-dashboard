export type NavItem = {
  title: string;
  href: string;
};

export const getNavItems = (): NavItem[] => {
  return [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    { title: "Products", href: "/dashboard/products" },
    { title: "Calendar", href: "/dashboard/calendar" },
    { title: "Analytics", href: "/dashboard/analytics" },
    { title: "Users", href: "/dashboard/users" },
    { title: "Settings", href: "/dashboard/settings" },
    { title: "Help", href: "/dashboard/help" },
  ];
};
