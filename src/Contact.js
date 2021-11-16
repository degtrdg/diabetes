import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import deanphoto from "./images/deanphoto.jpg";

export default function Contact() {
  return (
    <div>
      <h1 className="text-center">About the Developers</h1>
      <br />
      <div style={{ justifyContent: "center" }}>
        <div className="card text-center">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-6" style={{ justifyContent: "center" }}>
                <div className="card-text pb-3">
                  <p>Dean Hunt is a computer science student at the University of Texas at Dallas.
                    He currently is employed as a Software Engineering intern at Netsmart Technologies, where he develops high-revenue customer-facing products using various language frameworks.
                  </p>
                  <p>Email: <a href="mailto:dwhuntmail7@gmail.com">dwhuntmail7@gmail.com</a></p>
                  <a href="https://www.linkedin.com/in/dean-hunt-3a7bb2217/" target="_blank">LinkedIn</a>
                  <br />
                  <br />
                  <a href="https://www.github.com/deanhunt7" target="_blank">GitHub</a>
                </div>
              </div>
              <div className="col-6" style={{ justifyContent: "center" }}>
                <div className="card-text pt-2 pb-3">
                  <img src={deanphoto} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
