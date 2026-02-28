import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../page/Login";
import DashboardLayout from "../components/modules/Layout/Layout";

import { ProtectedRoute, PublicRoute } from "../utils/withAuth";
import CommonPage from "../components/modules/shered/CommonPage";
import { DashboardPage } from "../page/DashboardOverview";

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
          { path: "/dashboard", element: <DashboardPage /> },
          {
            path: "/dashboard/products",
            element: <CommonPage title="Products" />,
          },
          {
            path: "/dashboard/calendar",
            element: <CommonPage title="Calendar" />,
          },
          {
            path: "/dashboard/analytics",
            element: <CommonPage title="Analytics" />,
          },
          { path: "/dashboard/users", element: <CommonPage title="Users" /> },
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
