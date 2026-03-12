import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
// import Search from "./pages/Search";
// import ItemDetails from "./pages/ItemDetails";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          /> */}
        
        {/* <Route path="/search" element={
                        <ProtectedRoute>
          <Search />
              </ProtectedRoute>

          } />
        <Route path="/item/:id" element={
                        <ProtectedRoute>

          <ItemDetails />

              </ProtectedRoute>
          } /> */}
      </Routes>
    </Router>
  );
}

export default App;