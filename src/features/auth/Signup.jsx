import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "./authApi";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // Password strength
  const getPasswordStrength = () => {
    if (password.length < 6) return "weak";
    if (password.length < 10) return "medium";
    return "strong";
  };

  const validateForm = () => {
    const newErrors = {};

    if (!fullName.trim()) newErrors.fullName = "Full name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      console.log({
        full_name: fullName,
        email,
        password,
        phone_number: phoneNumber || null
      })
      await signupUser({
        full_name: fullName,
        email,
        password,
        phone_number: phoneNumber || null
      });


      navigate("/verify-email");
    } catch (err) {
      if (err.response?.data?.errors) {
        const backendErrors = {};
        err.response.data.errors.forEach((e) => {
          backendErrors[e.param] = e.msg;
        });
        setErrors(backendErrors);
      } else {
        setErrors({ general: err.response?.data?.message || "Signup failed" });
      }
    }

    setLoading(false);
  };

  const strength = getPasswordStrength();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6"
      >
        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Create an Account</h2>
          <p className="text-gray-500 text-sm mt-1">
            Sign up to get started
          </p>
        </div>

        {/* General Error */}
        {errors.general && (
          <p className="text-red-500 text-sm text-center">{errors.general}</p>
        )}

        {/* Full Name */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}
        </div>

        {/* Phone (Optional) */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Phone Number (optional)
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Password</label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-sm text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password}</p>
          )}

          {/* Password Strength Indicator */}
          {password && (
            <p
              className={`text-xs ${
                strength === "weak"
                  ? "text-red-500"
                  : strength === "medium"
                  ? "text-yellow-500"
                  : "text-green-600"
              }`}
            >
              Password strength: {strength}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

        {/* Footer */}
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