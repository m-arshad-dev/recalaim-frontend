import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
//import Login from "./features/auth/Login";
//import Signup from "./features/auth/Signup";
//import Search from "./pages/Search";
//import ItemDetails from "./pages/ItemDetails";

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;