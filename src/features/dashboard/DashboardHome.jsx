import DashboardLayout from "../layout/DashboardLayout";
import LostItemForm from "../lostItems/lostItemFrom";
import LostItemList from "../lostItems/LostItemList";

export default function DashboardHome() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Lost & Found Dashboard</h1>
      <LostItemForm />
      <h2 className="text-xl font-bold mt-6 mb-2">Reported Lost Items</h2>
      <LostItemList />
    </DashboardLayout>
  );
}