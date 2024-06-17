import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import './main.sass'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/about" element = {<About />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
