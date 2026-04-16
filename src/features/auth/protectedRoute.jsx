import { useAuthStore } from "../../store/authStore";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuthStore();

  if (loading) return null; // or a spinner

  if (!user) return <Navigate to="/login" />;

  return children;
}