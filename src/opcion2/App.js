import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {Home} from './Home';
import {Game} from './Game'


export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/game" element={<Game/>}/>
        </Routes>
      </Router>
    </div>
  );
}
