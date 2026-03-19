import { useState, useEffect } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import LostItemForm from "./LostItemForm";
import LostItemList from "./LostItemList";
import SearchFilter from "../search/SearchFilter";
import { getLostItems } from "./lostItemsAPI";

export default function LostItems() {
  const [items, setItems] = useState([]);

  const fetchItems = async (filters = {}) => {
    const data = await getLostItems(filters);
    setItems(data);
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSearch = (filters) => {
    fetchItems(filters);
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Lost Items</h1>
      <LostItemForm />
      <SearchFilter onSearch={handleSearch} />
      <LostItemList items={items} />
    </DashboardLayout>
  );
}