import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../page/Login";
import DashboardLayout from "../components/modules/Layout/Layout";
import DashboardOverview from "../page/DashboardOverview";
import Products from "../components/modules/Dashboard/Products";
import Analytics from "../components/modules/Dashboard/Analytics";
import User from "../components/modules/Dashboard/User";
import { ProtectedRoute, PublicRoute } from "../utils/withAuth";
import CommonPage from "../components/modules/shered/CommonPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { path: "/dashboard", element: <DashboardOverview /> },
          { path: "/dashboard/products", element: <Products /> },
          {
            path: "/dashboard/calendar",
            element: <CommonPage title="Calendar" />,
          },
          { path: "/dashboard/analytics", element: <Analytics /> },
          { path: "/dashboard/users", element: <User /> },
          {
            path: "/dashboard/settings",
            element: <CommonPage title="Settings" />,
          },
          {
            path: "/dashboard/help",
            element: <CommonPage title="Help" />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);
