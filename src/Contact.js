import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  return (
    <div style={{ justifyContent: "center" }}>
      <div className="card text-center">
        <div className="card-body">
          <div className="row">
            <div className="col-6" style={{ justifyContent: "center" }}>
              <div className="card-text pt-2 pb-3">
                <p>Dean Hunt</p>
              </div>
            </div>
            <div className="col-6" style={{ justifyContent: "center" }}>
              <div className="card-text pt-2 pb-3">
                <img src="../deanphoto.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
