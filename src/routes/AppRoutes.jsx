import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../pages/Cart";
import ServiceDetail from "../pages/ServiceDetail";

const AppRoutes = () => {
  return (
    <Router>
      <Box display="flex" flexDirection="column" minH="100vh">
        <Navbar />
        
        {/* Este Box ocupa el espacio disponible entre Navbar y Footer */}
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </Router>
  );
};

export default AppRoutes;
