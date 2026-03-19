import { useEffect, useState } from "react";
import { getFoundItems } from "./lostItemsAPI";

export default function FoundItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getFoundItems();
      setItems(data);
    };
    fetchItems();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map(item => (
        <div key={item.id} className="p-4 bg-white rounded shadow">
          <h3 className="font-bold">{item.title}</h3>
          <p>{item.description}</p>
          <p className="text-gray-500">Location: {item.location}</p>
        </div>
      ))}
    </div>
  );
}