import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/HomePage";
import Total from "./pages/Total";
import WhatWeDo from "./pages/WhatWeDo";
import Contact from "./components/Contact";
import Gofundme from "./pages/Mygofund";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Total />} />
      <Route path="/what-we-do" element={<WhatWeDo />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donate" element={<Gofundme />} />
    </Routes>
  );
};

export default App;
