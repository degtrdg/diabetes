import React, { useState } from "react";
//For connection to backend

// I want to make a question components where I can send the answers through json to the backend
// input is going to be integers and booleans
// going to need validation for the numbers

function Question(props) {
  // type of answer (integer, boolean)
  // question going to be a string
  // if integer, then validate whether it is valid
  // if boolean, then have a true and false button
  // pass state to the parent
  // each question will have an answer
  // you're alowed to submit the form

  var answer = props.answer;
  var setAnswer = props.setQuestion;
  //  [answer, setAnswer] = useState("unanswered");

  if (props.answerType === "integer") {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="col-6 py-3">
          <div className="row">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-text py-3">
                  <h3>{props.questionText}</h3>
                  <p>
                    {props.questionText ===
                      "What is your resting heart rate (in bpm)?"
                      ? "To measure, count heartbeats for 10 seconds, and multiply by 6."
                      : ""}
                  </p>
                  <p>
                    {props.questionText ===
                      "What type of chest pain do you experience?"
                      ? "\n1 = Pain from exercise/stress, \n2 = Pain while at rest, \n3 = Other type of abnormal pain"
                      : ""}
                  </p>
                  <br />
                  <input
                    type="number"
                    value={answer}
                    min={props.min}
                    max={props.max}
                    onChange={(e) => {
                      setAnswer(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/*added inline css styling, flex is basically any element, but it is much more customizable in terms of placement, so it was nice in this case to just be able to place it in the middle. JustifyContent is self-explanatory*/}
        <div className="col-6 pt-3 pb-3">
          {/*Basically there are 12 columns on a webpage for react, so I just said that I want my card to take up 6 of these 12. That means there
        are 3 empty columns on each side since we justified it to the middle.*/}
          <div className="row">
            {/* added a row next */}
            <div className="card text-center">
              <div className="card-body">
                <div className="card-text pt-3">
                  <h3>{props.questionText}</h3>
                  <br />
                  <div className="row pb-3">
                    <div className="col-6">
                      <div>
                        <input
                          type="radio"
                          name={props.questionText}
                          value={true}
                          onChange={(e) => setAnswer(e.target.value)}
                        />
                        <br />
                        <label>
                          {props.questionText === "What is your gender?"
                            ? "Male"
                            : "Yes  "}
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="pr-3">
                        <input
                          type="radio"
                          name={props.questionText}
                          value={false}
                          onChange={(e) => setAnswer(e.target.value)}
                        />
                        <br />
                        <label>
                          {props.questionText === "What is your gender?"
                            ? "Female"
                            : "No"}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function SubmitButton(props) {
  var getSubmit = () => {
    if (props.checked()) {
      console.log("The answers are ready!");
      // send the answers to the backend
      // use props.answersArr
      // idk if this will actually work; need to make endpoint for /result
      fetch("/result", {
        method: "POST",
        cache: "no-cache",
        headers: {
          content_type: "application/json",
        },
        body: props.answersArr,
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          props.setResult(response);
          console.log(response);
        });
    } else console.log("answered");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "0.6em",
        paddingBottom: "1.5em",
      }}
    >
      <button onClick={getSubmit}>Submit</button>
    </div>
  );
}
export default function Quiz() {
  // Make questions with types
  //3 age
  //4 gender
  //9 chest pain
  //18 history of heart disease
  //33 resting heart rate; show how to find it out
  //Height and weight to calculate BMI

  const [answer1, setQuestionsAnswered1] = useState("unanswered");
  const [answer2, setQuestionsAnswered2] = useState("unanswered");
  const [answer3, setQuestionsAnswered3] = useState("unanswered");
  const [answer4, setQuestionsAnswered4] = useState("unanswered");
  const [answer5, setQuestionsAnswered5] = useState("unanswered");
  const [answer6, setQuestionsAnswered6] = useState("unanswered");
  const [answer7, setQuestionsAnswered7] = useState("unanswered");
  const [result, setResult] = useState("unanswered");
  const questions = [
    {
      questionText: "What is your age?",
      answerType: "integer",
      answer: answer1,
      min: 0,
      max: 120,
      func: setQuestionsAnswered1,
    },
    {
      questionText: "What is your gender?",
      answerType: "boolean",
      answer: answer2,
      func: setQuestionsAnswered2,
    },
    {
      questionText: "What type of chest pain do you experience?",
      answerType: "integer",
      answer: answer3,
      min: 1,
      max: 3,
      func: setQuestionsAnswered3,
    },
    {
      questionText: "Does your family have a history of heart disease?",
      answerType: "boolean",
      answer: answer4,
      func: setQuestionsAnswered4,
    },
    {
      questionText: "What is your resting heart rate (in bpm)?",
      answerType: "integer",
      answer: answer5,
      min: 0,
      max: 200,
      func: setQuestionsAnswered5,
    },
    {
      questionText: "What is your height (in inches)?",
      answerType: "integer",
      answer: answer6,
      min: 0,
      max: 100,
      func: setQuestionsAnswered6,
    },
    {
      questionText: "What is your weight (in lbs)?",
      answerType: "integer",
      answer: answer7,
      min: 0,
      max: 300,
      func: setQuestionsAnswered7,
    },
    //Height and weight to calculate BMI
  ];

  const answersArr = [
    answer1,
    answer2,
    answer3,
    answer4,
    answer5,
    answer6,
    answer7,
  ];
  var checked = () => {
    if (
      answer1 === "unanswered" ||
      answer2 === "unanswered" ||
      answer3 === "unanswered" ||
      answer4 === "unanswered" ||
      answer5 === "unanswered" ||
      answer6 === "unanswered" ||
      answer7 === "unanswered"
    ) {
      return false;
    } else {
      return true;
    }
  };

  if (result === "unanswered") {
    return (
      <div>
        {questions.map((e) => {
          return (
            <Question
              answer={e.answer}
              setQuestion={e.func}
              questionText={e.questionText}
              answerType={e.answerType}
              min={e.min}
              max={e.max}
            />
          );
        })}
        <SubmitButton
          result={result}
          setResult={setResult}
          checked={checked}
          answersArr={answersArr}
        />
      </div>
    );
  } else {
    return (
      <div>
        <Result result={result} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={() => setResult("unanswered")}>Reset</button>
        </div>
      </div>
    );
  }
}

function Result(props) {
  let result = null;
  if (props.result === 0) {
    result = "You probably are not at risk for heart disease";
  } else {
    result = "You have a chance of being at risk for heart disease";
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="col-6 pt-3 pb-3">
        <div className="row">
          <div className="card text-center">
            <div className="card-body">
              <div className="card-text pt-2">
                <h3>Result</h3>
                <h4>{result}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
