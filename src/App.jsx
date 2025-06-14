import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import TrendNews from "./pages/TrendNews";
import CoinPage from "./pages/CoinPage";
import About from "./pages/About";
import Converter from "./pages/converter";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<TrendNews />} />
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
