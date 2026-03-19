// import { useEffect, useState } from "react";
// import { getProfile } from "./authApi";

// export default function Profile() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const data = await getProfile();
//       setUser(data);
//     };
//     fetchProfile();
//   }, []);

//   if (!user) return <p>Loading...</p>;

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
//       <h2 className="text-xl font-bold mb-4">Profile</h2>
//       <p><strong>Name:</strong> {user.full_name}</p>
//       <p><strong>Email:</strong> {user.email}</p>
//       <p>
//         <strong>Status:</strong>{" "}
//         {user.is_verified ? (
//           <span className="badge badge-success">Verified</span>
//         ) : (
//           <span className="badge badge-warning">Not Verified</span>
//         )}
//       </p>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "./authApi";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setUser(data);
      } catch (err) {
        console.error(err);
        alert("Failed to load profile");
      }
      setLoading(false);
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center gap-6">

          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
            {user.full_name?.charAt(0)}
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              {user.full_name}
            </h2>

            <p className="text-gray-500">{user.email}</p>

            {/* Verification Badge */}
            <div className="mt-3">
              {user.is_verified ? (
                <span className="inline-block bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full font-medium">
                  Verified Account
                </span>
              ) : (
                <span className="inline-block bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full font-medium">
                  Email Not Verified
                </span>
              )}
            </div>

            {/* Edit Profile Button */}
            <button
              onClick={() => navigate("/edit-profile")}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Account Details Card */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Account Details
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="text-gray-800 font-medium">{user.full_name}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="text-gray-800 font-medium">{user.email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Account Status</p>
              <p className="text-green-600 font-medium">
                {user.is_verified ? "Verified" : "Not Verified"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Platform</p>
              <p className="text-gray-800 font-medium">Reclaim.PK</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}