// import { useState } from "react";
// import { resetPassword } from "./authApi";

// export default function ResetPassword() {
//   const [token, setToken] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await resetPassword(token, newPassword);
//       alert("Password reset successful!");
//     } catch (err) {
//       console.error(err);
//       alert("Password reset failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
//       <h2 className="text-xl font-bold mb-4">Reset Password</h2>
//       <input type="text" placeholder="Reset Token" value={token} onChange={e=>setToken(e.target.value)} className="input input-bordered w-full mb-2"/>
//       <input type="password" placeholder="New Password" value={newPassword} onChange={e=>setNewPassword(e.target.value)} className="input input-bordered w-full mb-2"/>
//       <button type="submit" className="btn btn-primary w-full">Reset Password</button>
//     </form>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "./authApi";

export default function ResetPassword() {
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await resetPassword(token, newPassword);
      alert("Password reset successful!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Password reset failed. Please check your token and try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6"
        aria-labelledby="reset-heading"
      >
        {/* Title */}
        <div className="text-center">
          <h2 id="reset-heading" className="text-2xl font-bold text-gray-800">
            Reset Your Password
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Enter the reset token and choose a new password
          </p>
        </div>

        {/* Reset Token */}
        <div className="space-y-1">
          <label htmlFor="token" className="text-sm font-medium text-gray-700">
            Reset Token
          </label>
          <input
            id="token"
            type="text"
            placeholder="Paste the reset token from your email"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
            aria-required="true"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
          <p className="text-xs text-gray-500">
            Check your email inbox (and spam folder) for the reset token
          </p>
        </div>

        {/* New Password */}
        <div className="space-y-1">
          <label
            htmlFor="newPassword"
            className="text-sm font-medium text-gray-700"
          >
            New Password
          </label>
          <input
            id="newPassword"
            type="password"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            aria-required="true"
            minLength={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
          <p className="text-xs text-gray-500">
            Password must be at least 6 characters long
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium 
                     hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Resetting Password..." : "Reset Password"}
        </button>

        {/* Back to login */}
        <p className="text-center text-sm text-gray-500">
          Remember your password?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 font-medium cursor-pointer hover:underline"
          >
            Go back to login
          </span>
        </p>
      </form>
    </div>
  );
}