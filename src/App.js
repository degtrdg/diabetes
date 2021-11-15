// https://github.com/facebook/react/issues/13991#issuecomment-435587809
import React, { useState, Button } from "react";
import Quiz from "./Quiz";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Welcome from "./Welcome";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <div>
          <Routes>
            <Route path="/quiz" element={<Quiz />}></Route>
            <Route path="/" element={<Welcome />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
  // return (
  //   <div>
  //     <nav>
  //       <ul>
  //         <li>
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li>
  //           <Link to="/quiz">Quiz</Link>
  //         </li>
  //       </ul>
  //     </nav>

  //     <Routes>
  //       <Route path="/" component={Welcome}></Route>
  //       <Route path="/quiz" component={Quiz} />
  //     </Routes>
  //   </div>
  // );
}
