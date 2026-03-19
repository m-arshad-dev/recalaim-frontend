import { useState } from "react";
import { createFoundItem } from "./lostItemsAPI";

export default function FoundItemForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createFoundItem({ title, description, location });
      alert("Found item submitted successfully");
      setTitle(""); setDescription(""); setLocation("");
    } catch (err) {
      console.error(err);
      alert("Failed to submit found item");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Report Found Item</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="input input-bordered w-full mb-2"
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={e => setLocation(e.target.value)}
        className="input input-bordered w-full mb-2"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="textarea textarea-bordered w-full mb-2"
        required
      />
      <button type="submit" className="btn btn-primary w-full">Submit</button>
    </form>
  );
}