import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import medbg from "./images/med-bg.jpg";

export default function Welcome() {
  return (
    <div style={{ justifyContent: "center" }}>
      <div
        style={{ display: "flex", justifyContent: "center", backgroundImage: `url(${medbg})` }}
        className="pt-5 pb-5"
      >
        <h1>Machine Learning Heart Disease Predictor</h1>
      </div>
      <div className="col-12" style={{ justifyContent: "center" }}>
        <div className="row">
          <div className="card text-center">
            <div className="card-body">
              <div className="card-text pt-2 pb-3">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginLeft: "2vw",
                    marginRight: "2vw",
                  }}
                >
                  <a
                    href="/quiz"
                    className="btn btn-primary"
                    style={{ paddingLeft: "30px", paddingRight: "30px" }}
                  >
                    Take the Quiz!
                  </a>
                  <a
                    href="/about"
                    className="btn btn-warning"
                    style={{ paddingLeft: "30px", paddingRight: "30px" }}
                  >
                    Learn More About the Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-12"
        style={{
          justifyContent: "center",
          paddingLeft: "70px",
          paddingRight: "70px",
          paddingTop: "40px",
        }}
      >
        <h1 className="text-center">Warning!</h1>
        <br />
        <h4 className="text-center">
          This project is not to be used for medical advice.
        </h4>
        <br />
        <p>
          This project is intended to be used as a tool for learning and to showcase the power of machine learning.
          Neither of the developers are affiliated with any medical organization, and do not claim to have any medical knowledge.
        </p>
        <p>
          If you are worried about your health, please consult with your doctor and ensure that you are taking the proper precautions.
        </p>
        <p>
          Note: This project uses calculations for BMI.
          Athletes with high levels of muscle mass, pregnant women, and children may have abnormal BMI's, and thus results may be affected negatively.
        </p>
      </div>
    </div >
  );
}
