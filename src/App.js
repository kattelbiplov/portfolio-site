import "./App.css";
import React from "react";
import { Route, Routes } from 'react-router-dom';

import Article from "./Pages/Article";
import Home from "./Pages/HomePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} exact/>
      </Routes>
      
    </div>
  );
}

export default App;
