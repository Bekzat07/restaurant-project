import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//screens
import MainScreens from "./screens/MainScreens/MainScreens";
import Menu from "./screens/Menu/Menu";
import Posters from "./screens/Posters/Posters";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreens />} />
        <Route path="/posters" element={<Posters />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
