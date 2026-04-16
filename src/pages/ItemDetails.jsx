import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getItemDetails } from "../services/itemService";

function ItemDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const data = await getItemDetails(id);
                setItem(data);
            } catch (error) {
                console.error("Error fetching item:", error);
            }
        };

        fetchItem();
    }, [id]);

    const handleClaimClick = () => {
        navigate(`/claim/${item.id}`);
    };

    if (!item) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                Loading item...
            </div>
        );
    }

    const formattedDate = new Date(item.created_at).toLocaleDateString();

    return (
        <div className="flex justify-center bg-gray-200 min-h-screen">

            {/* iPhone Frame */}
            <div className="w-[390px] h-[844px] bg-pink-50 overflow-y-auto p-4">

                {/* Top Bar */}
                <div className="flex justify-between items-center mb-4">

                    <Link to="/" className="text-blue-500 font-medium">
                        ← Back
                    </Link>

                    <h1 className="text-blue-500 font-bold text-lg">
                        reclaim.pk
                    </h1>

                </div>

                {/* Page Title */}
                <h1 className="text-lg font-semibold mb-2">
                    Item Detail
                </h1>

                {/* Item Title Card */}
                <div className="bg-white rounded-xl shadow-sm p-4 flex justify-between items-center">
                    <h2 className="font-semibold text-lg">
                        {item.title}
                    </h2>

                    <span className="text-sm font-semibold">
                        Reclaim.Pk
                    </span>
                </div>

                {/* Image + Info Grid */}
                <div className="grid grid-cols-2 gap-3 mt-4">

                    {/* Main Image */}
                    <img
                        src={item.image_url || "https://via.placeholder.com/400"}
                        alt={item.title}
                        className="rounded-xl w-full h-[160px] object-cover"
                    />

                    {/* Info Stack */}
                    <div className="space-y-3">

                        <div>
                            <p className="text-xs text-gray-500">
                                Item Name
                            </p>

                            <div className="bg-gray-100 px-3 py-2 rounded-lg text-sm">
                                {item.title}
                            </div>
                        </div>

                        <div>
                            <p className="text-xs text-gray-500">
                                Category
                            </p>

                            <div className="bg-gray-100 px-3 py-2 rounded-lg text-sm capitalize">
                                {item.status}
                            </div>
                        </div>

                        <div>
                            <p className="text-xs text-gray-500">
                                Date Found
                            </p>

                            <div className="bg-gray-100 px-3 py-2 rounded-lg text-sm">
                                {formattedDate}
                            </div>
                        </div>

                    </div>

                </div>

                {/* Gallery Thumbnails */}
                <div className="flex gap-3 mt-4">
                    <div className="bg-gray-300 w-20 h-20 rounded-lg"></div>
                    <div className="bg-gray-300 w-20 h-20 rounded-lg"></div>
                    <div className="bg-gray-300 w-20 h-20 rounded-lg"></div>
                </div>

                {/* Founder Profile */}
                <h2 className="mt-6 font-semibold">
                    Founder profile
                </h2>

                <div className="bg-white rounded-xl p-4 shadow-sm mt-2">

                    <div className="flex items-center justify-between">

                        {/* Profile Info */}
                        <div className="flex items-center gap-3">

                            <div className="w-12 h-12 rounded-full bg-gray-300"></div>

                            <div>
                                <p className="font-semibold">
                                    User {item.user_id?.slice(0, 6)}
                                </p>

                                <p className="text-green-600 text-xs">
                                    ✔ Profile verified
                                </p>
                            </div>

                        </div>

                        {/* Claim Button */}
                        <button
                            onClick={handleClaimClick}
                            className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold"
                        >
                            ⭐ Claim This Item
                        </button>

                    </div>

                </div>

                {/* Description */}
                <div className="bg-white rounded-xl p-4 shadow-sm mt-4">
                    <h3 className="font-semibold mb-2">
                        Description
                    </h3>

                    <p className="text-sm text-gray-600">
                        {item.description}
                    </p>
                </div>

                {/* Safety First */}
                <div className="bg-white rounded-xl p-4 shadow-sm mt-6">

                    <h3 className="font-semibold mb-2">
                        Safety First
                    </h3>

                    <p className="text-sm text-gray-600 mb-3">
                        Always verify item ownership before handing over.
                        Meet in a public place and ensure proper identification.
                        ✔ Verified users help create a safer reclaim experience.
                    </p>

                    <div className="bg-gray-200 rounded-lg h-24 flex items-center justify-center text-sm text-gray-500">
                        Map Location Placeholder
                    </div>

                </div>

            </div>

        </div>
    );
}

export default ItemDetails;