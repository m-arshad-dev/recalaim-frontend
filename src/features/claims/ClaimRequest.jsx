import { useEffect, useState } from "react";
import { getClaims, createClaim } from "./lostItemsAPI";

export default function ClaimRequest({ itemId }) {
  const [claims, setClaims] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchClaims = async () => {
      const data = await getClaims();
      setClaims(data.filter(c => c.item_id === itemId));
    };
    fetchClaims();
  }, [itemId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createClaim({ itemId, message });
      alert("Claim submitted successfully");
      setMessage("");
      setClaims([...claims, { user_name: "You", message }]);
    } catch (err) {
      console.error(err);
      alert("Failed to submit claim");
    }
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Message for the owner"
          className="textarea textarea-bordered w-full mb-2"
          required
        />
        <button type="submit" className="btn btn-primary">Submit Claim</button>
      </form>

      <div className="space-y-2">
        {claims.map((c, idx) => (
          <div key={idx} className="p-2 bg-gray-100 rounded">
            <p><strong>{c.user_name}:</strong> {c.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}