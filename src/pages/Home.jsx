import { useState } from "react";
import { useNavigate } from  "react-router-dom";

const recentPosts = [
  { id: 1, title: "Item title", location: "Location", status: "Lost", image: null },
  { id: 2, title: "Item title", location: "Location", status: "Lost", image: null },
  { id: 3, title: "Item title", location: "Location", status: "Found", image: null },
];

export default function Home(){
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const filtered = recentPosts.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    return(
        <div className="min-h-screen bg-gray-100 font-sans">
            <header className="bg-white px-5 py-4 flex items-center justify-between border-b border-gray-200">
                <span className="text-blue-800 font-extrabold text-lg tracking-wide">LOGO</span>
                <button onClick={() => navigate("/login")}
                    className="text-gray-600 text-sm font-medium hover:text-blue-700 transition-colors">
                        Login
                    </button>
            </header>
            <main className="max-w-lg mx-auto px-5 py-8 space-y-4">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
                        Lost Something?
                    </h1>
                    <p className="text-gray-500 text-sm">
                        We help you recover what matters
                    </p>
                </div>
                <button onClick={()=>navigate("/post-lost")}
                    className="w-full bg-blue-800 hover:bg-blue-900 active:scale-[0.98] text-white font-semibold py-4 rounded-2xl transition-all duration-150 shadow-sm">
                        Post Lost
                </button>
                <button onClick={() => navigate("/post-found")}
                    className="w-full bg-white hover:bg-gray-50 active:scale-[0.98] text-blue-800 font-semibold py-4 rounded-2xl border-gray-200 transition-all duration-150">
                        Post Found
                </button>

                <div className="relative">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by item name . . ."
                    className="w-full bg-gray-200 text-gray-500 placeholder-gray-400 text-sm px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-300 transition-all"/>
                </div>
                <div>
                    <h2 className=" text-base font-bold text-gray-800 mb-3">
                        Recent Posts
                    </h2>
                    <div className="space-y-3">
                        {filtered.map((post) =>(
                            <div key={post.id} onClick={() => navigate(`/item/${post.id}`)} className="bg-gray-200 rounded-2xl p-3 flex items-center gap-4 cursor-pointer hover:bg-gray-300 active:scale-[0.98] transition-all">
                                <div className="w-16 h-16 rounded-xl bg-gray-300 flex-shrink-0 flex items-center justify-center">
                                    <svg className="w-7 h-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <p className="font-bold text-gray-800 text-sm">{post.title}</p>
                                    <p className="text-gray-500 text-xs mt-0.5">{post.location}</p>
                                    <span className={`inline-block mt-1.5 text-xs font-semibold px-3 py-0.5 rounded-full
                                        ${
                                            post.status === "Lost"
                                            ? "bg-red-100 text-red-500"
                                            : "bg-green-100 text-green-600"
                                        }`}>
                                            {post.status}
                                        </span>
                                </div>
                            </div>
                        ))}
                        {filtered.length === 0 && (
                            <p className="text-center text-gray-400 text-sm py-6">No items found.</p>
                        )}
                    </div>
                </div>

            </main>
        </div>
    );
}