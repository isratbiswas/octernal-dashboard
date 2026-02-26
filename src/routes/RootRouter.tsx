import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "../page/Login";
import DashboarOverview from "../page/DashboarOverview";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { path: "/login", Component: Login },
      { path: "/dashboard", Component: DashboarOverview },
    ],
  },
]);

export default router;
