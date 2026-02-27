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
    { title: "Analytics", href: "/dashboard/analytics" },
    { title: "Users", href: "/dashboard/users" },
    { title: "Settings", href: "" },
    { title: "Help", href: "" },
    { title: "Logout", href: "" },
  ];
};
