import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Videos from "./components/Videos";
import Customers from "./components/pages/Customers";
import Rentals from "./components/pages/Rentals";
import NotFound from "./components/NotFound";

import NavbarMosh from "./components/NavbarMosh";

function App() {
  return (
    <main className="container">
      <NavbarMosh />
      <Routes>
        <Route path="movies" element={<Videos />} />
        <Route path="customers" element={<Customers />} />
        <Route path="rentals" element={<Rentals />} />
        <Route path="not-found" element={<NotFound />} />
        <Route path="/" element={<Navigate to="movies" replace={true} />} />
        <Route path="*" element={<Navigate to="not-found" />} />
      </Routes>
    </main>
  );
}

export default App;
