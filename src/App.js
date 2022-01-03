import "./App.css";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore/Explore";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
