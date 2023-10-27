import React from "react";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Clubs from "./Pages/Clubs";
import Events from "./Pages/Events";
import Achievements from "./Pages/Achievements";
import Contact from "./Pages/Contact";
import Schedule from "./Pages/Schedule";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const location = useLocation();

  return (
    <>
      <Router>
        <Navbar />

        <AnimatePresence mode="wait" >
        <Switch location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/events" element={<Events/>} />
          <Route path="/schedule" element={<Schedule/>} />
          <Route path="/achievments" element={<Achievements/>} />
          <Route path="/contact" element={<Contact />} />
          </Switch>
          </AnimatePresence>

        <Footer />
      </Router>
    </>
  );
}

export default App;
