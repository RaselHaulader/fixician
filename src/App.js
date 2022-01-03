import "./App.css";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home/Home";
import Review from "./pages/Home/Review/Review";



function App() {
  return (
    <div className="App">
      <Home></Home>
      <Review></Review>
      <Contact></Contact>
    </div>
  );
}

export default App;
