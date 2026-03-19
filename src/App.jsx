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

// Dashboard Components
import DashboardHome from "./features/dashboard/DashboardHome";
import LostItems from "./features/dashboard/LostItems";
import FoundItems from "./features/dashboard/FoundItems";
import Claims from "./features/dashboard/Claims";

function App() {
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

        {/* Protected */}
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/edit-profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />

        <Route path="/dashboard" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
        <Route path="/dashboard/lost-items" element={<ProtectedRoute><LostItems /></ProtectedRoute>} />
        <Route path="/dashboard/found-items" element={<ProtectedRoute><FoundItems /></ProtectedRoute>} />
        <Route path="/dashboard/claims" element={<ProtectedRoute><Claims /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;