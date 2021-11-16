import React from "react";
import medbg from "./images/med-bg.jpg";
import js from "./images/js_html_css.png";
import react from "./images/react.png";
import sklearn from "./images/sklearn.png";
import pandas from "./images/pandas.png";
import flask from "./images/flask.png";
import numpy from "./images/numpy.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  return (
    <div style={{ justifyContent: "center" }}>
      <div
        style={{ display: "flex", justifyContent: "center", backgroundImage: `url(${medbg})` }}
        className="pt-5 pb-5"
      >
        <h1>Machine Learning Heart Disease Predictor</h1>
      </div>
      <br />
      <h3 className="text-center">What tools were used?</h3>
      <div className="row">
        <div className="col-4 py-3" react style={{ justifyContent: "center" }}>
          <div className="card text-center">
            <div className="card-body">
              <img src={react} width="320" height="200" />
            </div>
          </div>
        </div>
        <div className="col-4 py-3" style={{ justifyContent: "center" }}>
          <div className="card text-center">
            <div className="card-body">
              <img src={flask} width="320" height="200" />
            </div>
          </div>
        </div>
        <div className="col-4 py-3" style={{ justifyContent: "center" }}>
          <div className="card text-center">
            <div className="card-body">
              <img src={numpy} width="320" height="200" />
            </div>
          </div>
        </div>
        <div className="col-4 py-3" style={{ justifyContent: "center" }}>
          <div className="card text-center">
            <div className="card-body">
              <img src={pandas} width="320" height="200" />
            </div>
          </div>
        </div>
        <div className="col-4 py-3" style={{ justifyContent: "center" }}>
          <div className="card text-center">
            <div className="card-body">
              <img src={sklearn} width="320" height="200" />
            </div>
          </div>
        </div>
        <div className="col-4 py-3" style={{ justifyContent: "center" }}>
          <div className="card text-center">
            <div className="card-body">
              <img src={js} width="320" height="200" />
            </div>
          </div>
        </div>
        <div className="mx-auto col-6 py-3" style={{ justifyContent: "center" }}>
          <div className="card text-center">
            <h2>How does the project work?</h2>
            <div className="card-body">
              <p>This project uses a decision tree classifying algorithm that is trained on a subset of the UCI heart disease dataset.
                The dataset is a set of medical records of patients with heart disease.
                The algorithm takes a set of user inputs and predicts whether or not the patient is at risk for heart disease, using the training data provided by the dataset.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
