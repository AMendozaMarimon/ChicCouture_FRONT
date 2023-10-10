import Navbar from "./components/Navbar/Navbar.tsx";
import Home from "./components/Home/Home.tsx";
import Shooping from "./components/Shooping/Shooping.tsx";
import Favorites from "./components/Favorites/Favorites.tsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shooping" element={<Shooping />} />
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </div>
  );
}

export default App; 
