// import { useState } from "react";
// import { forgotPassword } from "./authApi";

// export default function ForgotPassword() {
//   const [email, setEmail] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await forgotPassword(email);
//       alert(res.message);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to send reset email");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
//       <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
//       <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="input input-bordered w-full mb-2"/>
//       <button type="submit" className="btn btn-primary w-full">Send Reset Email</button>
//     </form>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "./authApi";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await forgotPassword(email);
      alert(res.message || "Password reset email sent!");
      navigate("/reset-password")
    } catch (err) {
      console.error(err);
      alert("Failed to send reset email. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6"
        aria-labelledby="forgot-heading"
      >
        {/* Title */}
        <div className="text-center">
          <h2 id="forgot-heading" className="text-2xl font-bold text-gray-800">
            Forgot your password?
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Enter your email address and we’ll send you a password reset link
          </p>
        </div>

        {/* Email Input */}
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </label>

          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />

          <p className="text-xs text-gray-500">
            Make sure this is the email you used when signing up
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium 
                     hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Sending Reset Email..." : "Send Reset Email"}
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