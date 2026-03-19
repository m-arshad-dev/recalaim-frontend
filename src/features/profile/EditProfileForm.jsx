import { useState } from "react";
import { updateUserProfile } from "./profileAPI";

export default function EditProfileForm({ user, onUpdate }) {
  const [fullName, setFullName] = useState(user.full_name);
  const [phoneNumber, setPhoneNumber] = useState(user.phone_number || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updated = await updateUserProfile({ full_name: fullName, phone_number: phoneNumber });
      onUpdate(updated);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 bg-white p-6 rounded shadow-md max-w-md">
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
      <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Full Name" className="input input-bordered w-full mb-2" />
      <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="Phone Number" className="input input-bordered w-full mb-2" />
      <button type="submit" className="btn btn-primary w-full">Update Profile</button>
    </form>
  );
}