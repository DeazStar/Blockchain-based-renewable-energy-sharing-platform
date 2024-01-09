import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Sell from './Sell';
import Buy from './Buy';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
