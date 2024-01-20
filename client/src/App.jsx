import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Sell from "./Sell";
import Buy from "./Buy";
import Login from "./Login";

function App() {
  const [user, setUser] = useState({});
  const [product, setProduct] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home setUser={setUser} setProduct={setProduct} />}
        />
        <Route path="/buy" element={<Buy product={product} user={user} />} />
        <Route path="/sell" element={<Sell user={user} />} />
        <Route
          path="/login"
          element={<Login setUser={setUser} setProduct={setProduct} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
