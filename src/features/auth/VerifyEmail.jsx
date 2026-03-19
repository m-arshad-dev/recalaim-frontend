// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { verifyEmail } from "./authApi";

// export default function VerifyEmail() {
//   const [token, setToken] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { user } = await verifyEmail(token);
//       alert(`Email verified successfully: ${user.full_name}`);
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//       alert("Email verification failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
//       <h2 className="text-xl font-bold mb-4">Verify Email</h2>
//       <input
//         type="text"
//         placeholder="Verification Token"
//         value={token}
//         onChange={(e) => setToken(e.target.value)}
//         className="input input-bordered w-full mb-2"
//       />
//       <button type="submit" className="btn btn-primary w-full">Verify Email</button>
//     </form>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyEmail } from "./authApi";

export default function VerifyEmail() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { user } = await verifyEmail(token);
      alert(`Email verified successfully: ${user.full_name}`);
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Email verification failed. Please check your token.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6"
        aria-labelledby="verify-heading"
      >
        {/* Title */}
        <div className="text-center">
          <h2 id="verify-heading" className="text-2xl font-bold text-gray-800">
            Verify Your Email
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Enter the verification token sent to your email
          </p>
        </div>

        {/* Token Input */}
        <div className="space-y-1">
          <label
            htmlFor="token"
            className="text-sm font-medium text-gray-700"
          >
            Verification Token
          </label>

          <input
            id="token"
            type="text"
            placeholder="Paste your verification token here"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
            aria-required="true"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />

          <p className="text-xs text-gray-500">
            Check your email inbox (and spam folder) for the token
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium 
                     hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Verifying..." : "Verify Email"}
        </button>

        {/* Back to login */}
        <p className="text-center text-sm text-gray-500">
          Already verified?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 font-medium cursor-pointer hover:underline"
          >
            Go to login
          </span>
        </p>
      </form>
    </div>
  );
}