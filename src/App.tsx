import Navbar from "./components/Navbar/Navbar.tsx";
import Home from "./components/Home/Home.tsx";
import Shooping from "./components/Shooping/Shooping.tsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shooping" element={<Shooping />} />
      </Routes>
    </div>
  );
}

export default App;
