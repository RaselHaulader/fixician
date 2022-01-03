import "./App.css";
import Home from "./pages/Home/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Explore from "./pages/Explore/Explore";


function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>

=======
    <div className="App">
      <h1>Fixician</h1>
      <h2>MD. SUJAN SHAIKH</h2>
      <h2>MD. SUJAN</h2>
    </div>
>>>>>>> sujanShaikh
  );
}

export default App;
