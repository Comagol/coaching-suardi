import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRoutes = () => {
    return (
        <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;