import { useState } from "react";

export default function SearchFilter({ onSearch }) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query, location });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input type="text" placeholder="Search..." value={query} onChange={e => setQuery(e.target.value)} className="input input-bordered flex-1" />
      <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} className="input input-bordered flex-1" />
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
}