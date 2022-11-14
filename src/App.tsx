import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Shared/Navigation/Navigation";
import Home from "./components/Home/Home/Home";
import Footer from "./Shared/Footer/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home#home" element={<Home></Home>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
