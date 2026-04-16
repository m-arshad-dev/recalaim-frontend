
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { loginUser, getProfile } from "./authApi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await loginUser(email, password);

    const { accessToken, refreshToken, user } = response;

    localStorage.setItem("token", accessToken);
    localStorage.setItem("refreshToken", refreshToken); // optional if you store it

    login(user, accessToken); // keep your auth store updated

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Login failed: Invalid credentials");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Left Side - Branding */}
        <div className="hidden md:flex flex-col justify-center items-center bg-blue-600 text-white p-10">
          <h1 className="text-3xl font-bold mb-4">Reclaim.PK</h1>
          <p className="text-blue-100 text-center max-w-sm">
            Centralized Lost & Found Platform for Pakistan.  
            Find your lost items or help others recover theirs.
          </p>

          <div className="mt-8 space-y-3 text-sm text-blue-100">
            <p>✔ Secure & Safe Platform</p>
            <p>✔ Verified User Accounts</p>
            <p>✔ 24/7 Moderation</p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="p-8 sm:p-10">
          <div className="max-w-md mx-auto">

            {/* Title */}
            <div className="mb-6 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800">
                Login to your account
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Welcome back! Please enter your details.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5" aria-labelledby="login-heading">

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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                            focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-required="true"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                          focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                />
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <span
                  onClick={() => navigate("/forgot-password")}
                  className="text-blue-600 text-sm cursor-pointer hover:underline"
                >
                  Forgot password?
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium 
                           hover:bg-blue-700 transition disabled:opacity-60"
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              {/* Signup Link */}
              <p className="text-center text-sm text-gray-500">
                Don’t have an account?{" "}
                <span
                  onClick={() => navigate("/signup")}
                  className="text-blue-600 font-medium cursor-pointer hover:underline"
                >
                  Create one
                </span>
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
