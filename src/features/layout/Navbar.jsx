import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export default function Navbar() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-lg">Reclaim.PK</div>
      <div className="flex items-center gap-4">
        {user && <span>Hi, {user.full_name}</span>}
        {user && (
          <button onClick={handleLogout} className="btn btn-sm btn-ghost">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}