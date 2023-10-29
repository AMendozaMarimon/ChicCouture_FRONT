import Navbar from "./components/Navbar/Navbar.tsx";
import Home from "./components/Home/Home.tsx";
import Shooping from "./components/Shooping/Shooping.tsx";
import ShoopingBag from "./components/ShoopingBag/ShoopingBag.tsx";
import Favorites from "./components/Favorites/Favorites.tsx";
import Detail from "./components/Details/Details.tsx";
import LoginAndRegister from "./components/LoginAndRegister/loginAndRegister.tsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shooping" element={<Shooping />} />
        <Route path="/shoopingbag" element={<ShoopingBag />} />
        <Route path="/shooping/:id" element={<Detail />}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/login" element={<LoginAndRegister />}/>
      </Routes>
    </div>
  );
}

export default App; 
