import DashboardLayout from "../layout/DashboardLayout";
import ModerateItems from "./ModerateItems";

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <ModerateItems />
    </DashboardLayout>
  );
}