import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import A_propos from "./pages/A_propos";
import Footer from "./components/Footer/Footer";
import './main.sass'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/a_propos" element = {<A_propos />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
