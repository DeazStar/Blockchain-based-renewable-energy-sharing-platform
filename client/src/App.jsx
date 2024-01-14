import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Sell from "./Sell";
import Buy from "./Buy";
import Login from "./Login";
import Dash from './Dash';


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
        <Route path="/buy" element={<Buy product={product} />} />
        <Route path="/sell" element={<Sell />} />
        <Route
          path="/login"
          element={<Login setUser={setUser} setProduct={setProduct} />}
        />
        <Route path="/dash" element={<Dash/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
