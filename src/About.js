import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  return (
    <div style={{ justifyContent: "center" }}>
      <div
        style={{ display: "flex", justifyContent: "center" }}
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
                  className="col-12"
                  style={{
                    justifyContent: "center",
                    paddingLeft: "70px",
                    paddingRight: "70px",
                    paddingTop: "40px",
                  }}
                >
                  <h2>About</h2>
                  <p>
                    What was used? Scikit learn, numpy, pandas (data frames), React,
                    Bootstrap, Flask. Languages: Javascript, Python, HTML,CSS
                  </p>
                  <p>
                    What was required? Tuned parameters for the model and increased
                    accuracy by 30%. Chose between various clasifiers and decided on a
                    decision tree algorithm for best performance. Cleaned data and used
                    numpy and pandas to give model proper data. This is a machine learning
                    project that uses data to predict the likelihood of whether a person
                    has a disease. The data is from the Heart Disease Dataset from the UCI
                    Machine Learning Repository.
                  </p>
                  <p>
                    Note: This is not actual medical advice. Extenutating circumstances to
                    take into consideration since BMI is used is if you are a child,
                    pregnant, or have a high amount of muscle mass.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
