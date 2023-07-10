import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
//screens
import MainScreens from "./screens/MainScreens/MainScreens";
import Menu from "./screens/Menu/Menu";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreens />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
