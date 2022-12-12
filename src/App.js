
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connexion from "./pages/Connexion";
import Home from "./pages/Home";
import User from './pages/User';
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Connexion" exact element={<Connexion />} />
        <Route path="/User" exact element={<User />} />


        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="/*" exact element={<Error />} />
        {/* <Route path="/User/*" exact element={<Error />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
