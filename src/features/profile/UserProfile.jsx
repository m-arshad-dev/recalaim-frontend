import { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { getUserProfile, updateUserProfile } from "./profileAPI";
import EditProfileForm from "./EditProfileForm";

export default function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getUserProfile();
      setUser(data);
    };
    fetchProfile();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <div className="bg-white p-6 rounded shadow-md max-w-md">
        <p><strong>Full Name:</strong> {user.full_name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Verified:</strong> {user.is_verified ? "Yes" : "No"}</p>
        <p><strong>Trust Score:</strong> {user.trust_score}</p>
      </div>

      <EditProfileForm user={user} onUpdate={setUser} />
    </DashboardLayout>
  );
}