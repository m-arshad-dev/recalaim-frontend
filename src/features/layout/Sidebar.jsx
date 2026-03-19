import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export default function Sidebar() {
  const { role } = useAuthStore();

  return (
    <aside className="w-64 bg-gray-100 p-4 min-h-screen">
      <ul className="flex flex-col gap-2">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/dashboard/lost-items">Lost Items</Link></li>
        <li><Link to="/dashboard/found-items">Found Items</Link></li>
        <li><Link to="/dashboard/claims">Claims</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        {role === "admin" && (
          <>
            <li><Link to="/dashboard/admin/users">Manage Users</Link></li>
            <li><Link to="/dashboard/admin/reports">Reports</Link></li>
          </>
        )}
      </ul>
    </aside>
  );
}