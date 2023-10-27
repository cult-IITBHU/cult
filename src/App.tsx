import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Clubs from "./Pages/Clubs";
import Events from "./Pages/Events";
import Achievements from "./Pages/Achievements";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/events" element={<Events/>} />
          <Route path="/achievments" element={<Achievements/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
