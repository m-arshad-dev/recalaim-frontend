import { useEffect, useState } from "react";
import { getRecentItems } from "../services/itemService";
import { useNavigate } from "react-router-dom";


function Home() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        const loadItems = async () => {
            try {
                const data = await getRecentItems();
                setItems(data);
            } catch (error) {
                console.error("Error loading items:", error);
            } finally {
                setLoading(false);
            }
        };

        loadItems();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Recent Lost & Found Items</h1>

            {loading && <p>Loading items...</p>}

            {!loading && items.length === 0 && <p>No items available</p>}

            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {items.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => navigate(`/item/${item.id}`)}
                        style={{
                            border: "1px solid #ccc",
                            padding: "15px",
                            width: "200px",
                            borderRadius: "8px",
                            cursor: "pointer"
                        }}
                    >

                        <img
                            src={item.image_url}
                            alt={item.title}
                            style={{ width: "100%", height: "150px", objectFit: "cover" }}
                        />
                        <h3>{item.title}</h3>
                        <p>Status: {item.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
