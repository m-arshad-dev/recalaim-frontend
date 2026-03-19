// import { useState, useEffect } from "react";
// import { getProfile, updateProfile } from "./authApi";

// export default function EditProfile() {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const data = await getProfile();
//       setFullName(data.full_name);
//       setEmail(data.email);
//     };
//     fetchProfile();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await updateProfile({ full_name: fullName, email });
//       alert("Profile updated successfully");
//     } catch (err) {
//       console.error(err);
//       alert("Profile update failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
//       <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
//       <input
//         type="text"
//         value={fullName}
//         onChange={(e) => setFullName(e.target.value)}
//         className="input input-bordered w-full mb-2"
//       />
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="input input-bordered w-full mb-2"
//       />
//       <button type="submit" className="btn btn-primary w-full">Save Changes</button>
//     </form>
//   );
// }

import { useState, useEffect } from "react";
import { getProfile, updateProfile } from "./authApi";

export default function EditProfile() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const data = await getProfile();
        setFullName(data.full_name);
        setEmail(data.email);
      } catch (err) {
        console.error(err);
        alert("Failed to load profile");
      }
      setLoading(false);
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      await updateProfile({ full_name: fullName, email });
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Profile update failed. Please try again.");
    }

    setSaving(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6"
        aria-labelledby="edit-profile-heading"
      >
        {/* Title */}
        <div className="text-center">
          <h2 id="edit-profile-heading" className="text-2xl font-bold text-gray-800">
            Edit Profile
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Update your personal information
          </p>
        </div>

        {/* Full Name */}
        <div className="space-y-1">
          <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            aria-required="true"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                      focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                      focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Save Button */}
        <button
          type="submit"
          disabled={saving}
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium 
                    hover:bg-blue-700 transition disabled:opacity-60"
        >
          {saving ? "Saving Changes..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}