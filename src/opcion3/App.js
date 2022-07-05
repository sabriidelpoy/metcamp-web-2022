import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {Home} from './Home';
import {Game} from './Game'

import 'bulma/css/bulma.min.css';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="/metcamp-web-2022" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}
