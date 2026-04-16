import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./features/auth/protectedRoute"

// Auth Components
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
import VerifyEmail from "./features/auth/VerifyEmail";
import ForgotPassword from "./features/auth/ForgotPassword";
import ResetPassword from "./features/auth/ResetPassword";
import Profile from "./features/auth/Profile";
import EditProfile from "./features/auth/EditProfile";
import Founditem from "./features/foundItem/Founditem"
// Dashboard Components
import DashboardHome from "./features/dashboard/DashboardHome";
import LostItems from "./features/dashboard/LostItems";
import FoundItems from "./features/dashboard/FoundItems";
import Claims from "./features/dashboard/Claims";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
// import Login from "./features/auth/Login";
// import Signup from "./features/auth/Signup";
import Search from "./pages/Search";
import ItemDetails from "./pages/ItemDetails";
import ClaimItem from "./pages/ClaimItem";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
// // import Login from "./features/auth/Login";
// // import Signup from "./features/auth/Signup";
// import Search from "./pages/Search";
// import ItemDetails from "./pages/ItemDetails";
// import ClaimItem from "./pages/ClaimItem";

import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import { getUserProfile } from "./features/profile/profileAPI";

function App() {
const loadUserFromStorage = useAuthStore((state) => state.loadUserFromStorage);
const logout = useAuthStore((state) => state.logout);
useEffect(() => {
  const restoreUser = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) return;

      const response = await getUserProfile(); // calls /users/me
      console.log(response.data)
      loadUserFromStorage(response.data);
    } catch (error) {
      console.log("Session expired or user not logged in");
      logout()
    }
  };

  restoreUser();
}, [loadUserFromStorage , logout]);
  return (
    <Router>
      <Routes>

        {/* Public */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="found-item" element={<Founditem/>}/>
        {/* Protected */}
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/edit-profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />

        <Route path="/dashboard" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
        <Route path="/dashboard/lost-items" element={<ProtectedRoute><LostItems /></ProtectedRoute>} />
        <Route path="/dashboard/found-items" element={<ProtectedRoute><FoundItems /></ProtectedRoute>} />
        <Route path="/dashboard/claims" element={<ProtectedRoute><Claims /></ProtectedRoute>} />
        <Route path="/" element={<Home />} />

        {/* <Route path="/" element={<Home />} />

        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}

        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="/claim/:itemId" element={<ClaimItem />} />
        <Route path="/claim/:itemId" element={<ClaimItem />} /> */} 

      </Routes>
    </Router>
  );
}

export default App;