import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ClaimItem() {
    const { itemId } = useParams();
    const navigate = useNavigate();

    const [description, setDescription] = useState("");
    const [contactMethod, setContactMethod] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const claimData = {
            itemId,
            description,
            contactMethod
        };

        console.log("Submitting claim:", claimData);

        alert("Claim submitted successfully (mock)!");
    };

    return (
        <div className="bg-[#e5e5e5] min-h-screen flex justify-center">

            {/* iPhone Frame */}
            <div className="max-w-[390px] min-h-[844px] w-full bg-white p-4 overflow-hidden">

                {/* Top Bar */}
                <div className="flex justify-between items-center border rounded-md p-3 mb-6">

                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="text-blue-500 font-medium"
                    >
                        ← Back
                    </button>

                    {/* App Name */}
                    <span className="text-blue-600 font-bold">
                        reclaim.pk
                    </span>

                </div>

                {/* Main Title */}
                <h1 className="text-2xl font-bold text-center mb-6">
                    Claim This Item 🤗
                </h1>

                {/* Item Summary */}
                <div className="border rounded-lg p-3 flex gap-3 mb-6">

                    {/* Image Placeholder */}
                    <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>

                    {/* Item Info */}
                    <div>
                        <p className="font-semibold">
                            Black Leather Wallet
                        </p>

                        <p className="text-sm text-gray-500">
                            Found at: UOG Campus Library
                        </p>
                    </div>

                </div>

                {/* Verification Question */}
                <div className="mb-6">

                    <label className="block text-sm font-medium mb-2">
                        Describe a unique feature of this item (e.g. contents, specific marks).
                    </label>

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Type your answer here.."
                        className="w-full bg-gray-100 p-3 rounded-md text-sm h-24 resize-none"
                    />

                </div>

                {/* Upload Button */}
                <button className="w-full bg-blue-100 text-blue-700 flex items-center justify-center gap-2 p-3 rounded-md mb-6">
                    📷 Upload a photo of yourself with the item (if any) or matching receipt
                </button>

                {/* Contact Method */}
                <div className="mb-6">

                    <h3 className="font-semibold mb-3">
                        How should the founder contact you?
                    </h3>

                    <div className="flex gap-3">

                        <button
                            onClick={() => setContactMethod("phone")}
                            className={`flex-1 p-2 rounded-md text-sm ${contactMethod === "phone"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200"
                                }`}
                        >
                            Phone Number
                        </button>

                        <button
                            onClick={() => setContactMethod("email")}
                            className={`flex-1 p-2 rounded-md text-sm ${contactMethod === "email"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200"
                                }`}
                        >
                            University Email
                        </button>

                    </div>

                </div>

                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    className="w-full bg-[#4caf50] text-white font-semibold py-3 rounded-md"
                >
                    Submit Claim
                </button>

            </div>

        </div>
    );
}

export default ClaimItem;