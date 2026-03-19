// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuthStore } from "../../store/authStore";
// import { loginUser, getProfile } from "./authApi";
// // import loginHero from "/mnt/data/a_digital_illustration_showcases_a_login_screen_fo.png"; // your uploaded image path

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const { login } = useAuthStore();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { accessToken } = await loginUser(email, password);
//       localStorage.setItem("token", accessToken);
//       const user = await getProfile();
//       login(user, accessToken);
//       navigate("/dashboard");
//     } catch (err) {
//       console.error(err);
//       alert("Login failed: Invalid credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
//       {/* Header / Logo */}
//       <header className="text-center mb-6">
//         {/* <img src={loginHero} alt="Reclaim.PK Login" className="mx-auto w-48 h-auto mb-4 rounded" /> */}
//         <h1 className="text-3xl font-bold text-blue-700">Reclaim.PK</h1>
//         <p className="text-gray-600">Centralized Lost & Found Platform for Pakistan</p>
//       </header>

//       {/* Login Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-white rounded-lg shadow-md p-6"
//       >
//         <h2 className="text-xl font-semibold mb-4 text-gray-800">Login to Your Account</h2>
//         <p className="text-gray-500 mb-4">Enter your email and password to continue.</p>

//         <div className="mb-3">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         <div className="mb-3">
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         <div className="flex justify-end mb-4">
//           <a href="/forgot-password" className="text-blue-600 hover:underline text-sm">
//             Forgot Password?
//           </a>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
//         >
//           Login
//         </button>

//         <p className="text-center mt-4 text-gray-600">
//           New to Reclaim.PK?{" "}
//           <a href="/signup" className="text-green-600 hover:underline font-medium">
//             Sign Up
//           </a>
//         </p>
//       </form>

//       {/* Footer Trust Icons */}
//       <footer className="mt-6 flex flex-col sm:flex-row justify-center gap-6 text-center text-gray-600 text-sm">
//         <div className="flex flex-col items-center">
//           <span className="text-green-600 font-bold">✔</span>
//           Secure & Safe
//         </div>
//         <div className="flex flex-col items-center">
//           <span className="text-green-600 font-bold">✔</span>
//           Verified Accounts
//         </div>
//         <div className="flex flex-col items-center">
//           <span className="text-blue-600 font-bold">🔍</span>
//           24/7 Moderation
//         </div>
//       </footer>
//     </div>
//   );
// }
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
      const { accessToken } = await loginUser(email, password);
      localStorage.setItem("token", accessToken);

      const user = await getProfile();
      login(user, accessToken);

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