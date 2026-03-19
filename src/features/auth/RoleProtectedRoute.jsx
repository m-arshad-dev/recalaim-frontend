import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export default function RoleProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuthStore();
  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/login" />;
  }
  return children;
}