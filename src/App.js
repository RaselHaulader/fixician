import "./App.css";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore/Explore";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import Contact from "./pages/Contact/Contact";
import ServiceDetails from "./pages/Home/Services/ServiceDetails/ServiceDetails";
import Dashboard from "./pages/Dashboard/Dashboard/DashBoard";
import UserProfile from "./pages/Dashboard/UserProfile/UserProfile";
import UserServices from "./pages/Dashboard/UserServices/UserServices";
import RequireAuth from "./privateRouter/PrivateRouter";
import UserReview from "./pages/Dashboard/UserReview/UserReview";
import useFirebase from "./Hooks/useFirebase";

function App() {
  const { auth } = useFirebase();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<Explore />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route
            path="/dashboard/userProfile"
            element={
              <RequireAuth>
                <UserProfile />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard/userServices"
            element={
              <RequireAuth>
                <UserServices />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard/userReview"
            element={
              <RequireAuth>
                <UserReview></UserReview>
              </RequireAuth>
            }
          />
        </Route>
        <Route
          path="/allServices/:id"
          element={
            <RequireAuth>
              <ServiceDetails />
            </RequireAuth>
          }
        />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
