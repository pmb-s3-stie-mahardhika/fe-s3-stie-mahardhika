import { Navigate } from "react-router-dom";
import ProtectedRoute from "./protected.router";
import DashboardAdmin from "@/pages/admin/dashboard.page";
import ValidationPage from "@/pages/admin/validation.page";
import SchedulePage from "@/pages/admin/schedule.page";
import SelectionPage from "@/pages/admin/selection.page";
import AdminPage from "@/pages/admin/admin.page";

export const adminRouter = [
  {
    path: "/admin",
    element: <Navigate to="/admin/dashboard" />,
  },
  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoute roles={["admin"]}>
        <DashboardAdmin />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/validation",
    element: (
      <ProtectedRoute roles={["admin"]}>
        <ValidationPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/schedule",
    element: (
      <ProtectedRoute roles={["admin"]}>
        <SchedulePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/selection",
    element: (
      <ProtectedRoute roles={["admin"]}>
        <SelectionPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/settings",
    element: (
      <ProtectedRoute roles={["admin"]}>
        <AdminPage />
      </ProtectedRoute>
    ),
  },
];
