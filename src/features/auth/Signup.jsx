// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { signupUser } from "./authApi";

// export default function Signup() {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await signupUser(fullName, email, password);
//       alert("Signup successful! Please verify your email.");
//       navigate("/verify-email");
//     } catch (err) {
//   console.error(err);
//   if (err.response?.data?.errors) {
//     alert("Signup failed: " + err.response.data.errors.map(e => e.msg).join(", "));
//   } else {
//     alert("Signup failed: " + (err.response?.data?.message || err.message));
//   }
// }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
//       <h2 className="text-xl font-bold mb-4">Sign Up</h2>
//       <input
//         type="text"
//         placeholder="Full Name"
//         value={fullName}
//         onChange={(e) => setFullName(e.target.value)}
//         className="input input-bordered w-full mb-2"
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="input input-bordered w-full mb-2"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="input input-bordered w-full mb-2"
//       />
//       <button type="submit" className="btn btn-primary w-full">Sign Up</button>
//     </form>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "./authApi";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signupUser(fullName, email, password);
      alert("Signup successful! Please verify your email.");
      navigate("/verify-email");
    } catch (err) {
      console.error(err);

      if (err.response?.data?.errors) {
        alert(
          "Signup failed: " +
            err.response.data.errors.map((e) => e.msg).join(", ")
        );
      } else {
        alert("Signup failed: " + (err.response?.data?.message || err.message));
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6"
        aria-labelledby="signup-heading"
      >
        {/* Title */}
        <div className="text-center">
          <h2 id="signup-heading" className="text-2xl font-bold text-gray-800">
            Create an Account
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Sign up to get started with your account
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
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            aria-required="true"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
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
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-required="true"
            minLength={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
          <p className="text-xs text-gray-500">
            Password must be at least 6 characters
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span
            className="text-blue-600 font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Log in
          </span>
        </p>
      </form>
    </div>
  );
}