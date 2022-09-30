import "./App.scss";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Flash from "./components/Flash";
import { AnimatePresence } from "framer-motion";
function App() {
  const [show, setShow] = useState(false);
  const [flashMessage, setFlashMessage] = useState("");
  const location = useLocation();
  return (
    <div className="bg-light main-container">
      <Navbar />
      {/* <br/> */}
      {show && <Flash message={flashMessage} setShow={setShow} />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route
            path="contact"
            element={
              <Contact setShow={setShow} setFlashMessage={setFlashMessage} />
            }
          />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
