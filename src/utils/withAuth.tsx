import { useAuth } from "../context/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../components/modules/shered/Loader";

export function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Loader />;
  }
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

export function PublicRoute() {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) {
    return <Loader />;
  }
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
}
