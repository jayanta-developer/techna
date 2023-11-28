import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Home from "./Pages/Home";
import Spot from "./Pages/Spot";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/spot" element={<Spot />} />
    </Routes>
  );
}
