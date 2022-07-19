import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from './Home';
import { Game } from './Game'

import 'bulma/css/bulma.min.css';

export default function App() {
  return (
    <BrowserRouter basename={"metcamp-web-2022"}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/game" element={<Game/>}/>
      </Routes>
    </BrowserRouter>
  );
}
