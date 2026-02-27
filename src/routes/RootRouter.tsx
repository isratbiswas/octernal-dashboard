import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "../page/Login";

import DashboardLayout from "../components/modules/Layout/Layout";
import DashboardOverview from "../page/DashboardOverview";
import Products from "../components/modules/Dashboard/Products";
import Analytics from "../components/modules/Dashboard/Analytics";
import User from "../components/modules/Dashboard/User";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { path: "login", Component: Login },
      {
        path: "dashboard",
        Component: DashboardLayout,
        children: [
          {
            index: true,
            Component: DashboardOverview,
          },

          {
            path: "products",
            Component: Products,
          },
          {
            path: "analytics",
            Component: Analytics,
          },
          {
            path: "users",
            Component: User,
          },
        ],
      },
    ],
  },
]);

export default router;
