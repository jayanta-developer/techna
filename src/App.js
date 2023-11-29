import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Home from "./Pages/Home";
import TokemSale from "./Pages/TokemSale";
import AdminPanel from "./Pages/AdminPanel";
import Spot from "./Pages/Spot";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tokem-sale" element={<TokemSale />} />
      <Route path="/admin-panel" element={<AdminPanel />} />
      <Route path="/spot" element={<Spot />} />
    </Routes>
  );
}
