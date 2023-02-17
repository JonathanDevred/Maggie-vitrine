import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import React from 'react';
import HomePage from "./Components/Pages/HomePage";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<h1>Merci de spécifier un nom d'utilisateur</h1>} />
    </Routes>
  );
}

export default App;
