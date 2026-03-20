import { useState } from "react";

const mockPosts = [
  {
    id: 1,
    title: "Mobile Phone",
    status: "Found",
    image: null,
    claims: [
      { id: 1, claimedBy: "Ali", answer: "It has a cracked screen on the back" },
      { id: 2, claimedBy: "Sara", answer: "The phone case is black with a ring holder" },
    ],
  },
  {
    id: 2,
    title: "Wallet",
    status: "Lost",
    image: null,
    claims: [
      { id: 3, claimedBy: "Ali", answer: "It has two ID cards" },
    ],
  },
  {
    id: 3,
    title: "ID Card",
    status: "Found",
    image: null,
    claims: [
      { id: 4, claimedBy: "Ali", answer: "It has two ID cards" },
      { id: 5, claimedBy: "Umar", answer: "The card has a red lanyard attached" },
    ],
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("posts");
  const [expandedPost, setExpandedPost] = useState(null);
  const [claimStatuses, setClaimStatuses] = useState({});

  const toggleClaims = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  const handleClaim = (claimId, action) => {
    setClaimStatuses((prev) => ({ ...prev, [claimId]: action }));
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-5 py-3 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="border border-slate-300 rounded-full px-5 py-1.5 text-sm font-semibold text-slate-600 tracking-wide">
          Logo
        </div>
        <div className="border border-slate-300 rounded-full px-5 py-1.5 text-sm font-semibold text-slate-600 tracking-wide">
          Profile
        </div>
      </header>

      {/* Main */}
      <main className="max-w-lg mx-auto px-4 py-6">
        {/* Page Title */}
        <h1 className="text-2xl font-extrabold text-slate-800 mb-1">My Dashboard</h1>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-slate-200 mb-5">
          {["posts", "claims"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm font-semibold capitalize transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {tab === "posts" ? "My Posts" : "Claims"}
            </button>
          ))}
        </div>

        {/* Posts Tab */}
        {activeTab === "posts" && (
          <div className="space-y-3">
            {mockPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                {/* Post Card */}
                <div className="flex items-center gap-4 p-4">
                  {/* Thumbnail */}
                  <div className="w-16 h-16 rounded-xl bg-slate-200 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-800 text-base truncate">{post.title}</p>
                    <span
                      className={`inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                        post.status === "Found"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      Status: {post.status}
                    </span>
                  </div>

                  {/* View Claims Button */}
                  <button
                    onClick={() => toggleClaims(post.id)}
                    className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all flex-shrink-0"
                  >
                    {expandedPost === post.id ? "Hide Claims" : "View Claims"}
                  </button>
                </div>

                {/* Expanded Claims */}
                {expandedPost === post.id && (
                  <div className="border-t border-slate-100 bg-slate-50 px-4 py-3 space-y-3">
                    {post.claims.length === 0 ? (
                      <p className="text-slate-400 text-sm text-center py-2">No claims yet.</p>
                    ) : (
                      post.claims.map((claim) => {
                        const status = claimStatuses[claim.id];
                        return (
                          <div
                            key={claim.id}
                            className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-slate-700">
                                  Claimed By:{" "}
                                  <span className="text-slate-900">{claim.claimedBy}</span>
                                </p>
                                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                  Answer: {claim.answer}
                                </p>
                              </div>

                              {status ? (
                                <span
                                  className={`text-xs font-bold px-3 py-1 rounded-full flex-shrink-0 ${
                                    status === "approved"
                                      ? "bg-green-100 text-green-700"
                                      : "bg-red-100 text-red-600"
                                  }`}
                                >
                                  {status === "approved" ? "Approved ✓" : "Rejected ✗"}
                                </span>
                              ) : (
                                <div className="flex flex-col gap-1.5 flex-shrink-0">
                                  <button
                                    onClick={() => handleClaim(claim.id, "rejected")}
                                    className="border border-red-400 text-red-500 hover:bg-red-50 text-xs font-semibold px-3 py-1 rounded-full transition-colors"
                                  >
                                    Reject
                                  </button>
                                  <button
                                    onClick={() => handleClaim(claim.id, "approved")}
                                    className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full transition-colors"
                                  >
                                    Approve
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Claims Tab */}
        {activeTab === "claims" && (
          <div className="space-y-3">
            {mockPosts.flatMap((post) =>
              post.claims.map((claim) => {
                const status = claimStatuses[claim.id];
                return (
                  <div key={claim.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-slate-400 font-medium mb-0.5">{post.title}</p>
                        <p className="text-sm font-semibold text-slate-700">
                          Claimed By: <span className="text-slate-900">{claim.claimedBy}</span>
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                          Answer: {claim.answer}
                        </p>
                      </div>

                      {status ? (
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full flex-shrink-0 ${
                            status === "approved"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {status === "approved" ? "Approved ✓" : "Rejected ✗"}
                        </span>
                      ) : (
                        <div className="flex flex-col gap-1.5 flex-shrink-0">
                          <button
                            onClick={() => handleClaim(claim.id, "rejected")}
                            className="border border-red-400 text-red-500 hover:bg-red-50 text-xs font-semibold px-3 py-1 rounded-full transition-colors"
                          >
                            Reject
                          </button>
                          <button
                            onClick={() => handleClaim(claim.id, "approved")}
                            className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full transition-colors"
                          >
                            Approve
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </main>
    </div>
  );
}