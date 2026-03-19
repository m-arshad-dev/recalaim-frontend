import { useEffect, useState } from "react";
import { getClaims, createClaim } from "../lostItems/lostItemsAPI";

export default function Claims({ itemId }) {
  const [claims, setClaims] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchClaims = async () => {
      const data = await getClaims();
      setClaims(data);
    };
    fetchClaims();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createClaim({ itemId, message });
      alert("Claim submitted");
      setMessage("");
    } catch (err) {
      console.error(err);
      alert("Failed to submit claim");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Claims</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Your message"
          className="textarea textarea-bordered w-full mb-2"
          required
        />
        <button type="submit" className="btn btn-primary">Submit Claim</button>
      </form>

      <div className="space-y-2">
        {claims.map(c => (
          <div key={c.id} className="p-2 bg-gray-100 rounded">
            <p><strong>User:</strong> {c.user_name}</p>
            <p>{c.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}