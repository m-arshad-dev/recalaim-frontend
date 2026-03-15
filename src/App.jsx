import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
// import Login from "./features/auth/Login";
// import Signup from "./features/auth/Signup";
import Search from "./pages/Search";
import ItemDetails from "./pages/ItemDetails";
import ClaimItem from "./pages/ClaimItem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="/claim/:itemId" element={<ClaimItem />} />
      </Routes>
    </Router>
  );
}

export default App;