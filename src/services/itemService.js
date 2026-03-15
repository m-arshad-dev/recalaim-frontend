const API_BASE = "http://localhost:5000/api";

export const getRecentItems = async () => {
    const res = await fetch(`${API_BASE}/items/recent`);

    if (!res.ok) {
        throw new Error("Failed to fetch recent items");
    }

    return res.json();
};

export const getItemDetails = async (id) => {
    const res = await fetch(`${API_BASE}/items/${id}`);

    if (!res.ok) {
        throw new Error("Failed to fetch item details");
    }

    return res.json();
};