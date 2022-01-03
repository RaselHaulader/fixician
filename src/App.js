import "./App.css";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore/Explore";
import ServiceDetails from "./pages/Home/Services/ServiceDetails/ServiceDetails";
import Dashboard from "./pages/Dashboard/Dashboard/DashBoard";
import UserProfile from "./pages/Dashboard/UserProfile/UserProfile";
import UserServices from "./pages/Dashboard/UserServices/UserServices";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/userProfile" element={<UserProfile />} />
        <Route path="/dashboard/userServices" element={<UserServices />} />
        <Route path="/serviceDetails" element={<ServiceDetails />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
