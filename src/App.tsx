import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/main";
import { Login } from "./pages/login";
import { Navbar } from "./components/navbar";
import { AddDish } from "./pages/add-dish";

function App() {
  return (
    <>
    <div className="" > </div>
    

    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/add-dish" element={<AddDish/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
