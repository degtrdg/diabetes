import React, { useState, Button } from "react";
import Quiz from "./Quiz";
import About from "./About";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Welcome from "./Welcome";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mx-auto text-center">
            <li className="px-3">
              <Link to="/">Home</Link>
            </li>
            <li className="px-3">
              <Link to="/quiz">Quiz</Link>
            </li>
            <li className="px-3">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <hr />
      <div>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/" element={<Welcome />}></Route>
        </Routes>
      </div>
    </Router >
  );
}
