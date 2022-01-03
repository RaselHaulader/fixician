import "./App.css";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore/Explore";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/explore" element={<Explore />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
