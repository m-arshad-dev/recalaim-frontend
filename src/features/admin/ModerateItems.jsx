import { useEffect, useState } from "react";
import { getAllItems, approveItem, rejectItem } from "./adminAPI";

export default function ModerateItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getAllItems();
      setItems(data);
    };
    fetchItems();
  }, []);

  const handleApprove = async (id) => {
    await approveItem(id);
    setItems(items.filter(item => item.id !== id));
  };

  const handleReject = async (id) => {
    await rejectItem(id);
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map(item => (
        <div key={item.id} className="p-4 bg-white rounded shadow">
          <h3 className="font-bold">{item.title}</h3>
          <p>{item.description}</p>
          <p className="text-gray-500">Location: {item.location}</p>
          <div className="mt-2 flex gap-2">
            <button className="btn btn-sm btn-success" onClick={() => handleApprove(item.id)}>Approve</button>
            <button className="btn btn-sm btn-error" onClick={() => handleReject(item.id)}>Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
}