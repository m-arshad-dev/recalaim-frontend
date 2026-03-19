// src/features/foundItems/FoundItems.jsx
import { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import FoundItemForm from "./FoundItemForm";
import FoundItemList from "./FoundItemList";
import SearchFilter from "../search/SearchFilter";

export default function FoundItems() {
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = ({ query, location }) => {
    // TODO: Call backend API with query & location to filter items
    console.log("Search:", query, location);
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Found Items</h1>
      <FoundItemForm />
      <SearchFilter onSearch={handleSearch} />
      <FoundItemList items={filteredItems} />
    </DashboardLayout>
  );
}