import React, { useState } from "react";
import Card from "react-bootstrap/Card"
// App
// I want to make a question components where I can send the answers through json to the backend
// input is going to be integers and booleans
// going to need vailidation for the numbers

function Question(props) {
  // type of answer (integer, boolean)
  // question going to be a string
  // if integer, then validate whether it is valid
  // if boolean, then have a true and false button
  // pass state to the parent
  // each question will have an answer
  // you're alowed to submit the form
  const [answer, setAnswer] = useState("unanswered");

  if (props.answerType === "integer") {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="col-md-6">
          <div className="row">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-text pb-3 pt-3">
                  <h3>{props.questionText}</h3>
                  <br />
                  <input
                    type="number"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
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
      <div style={{ display: 'flex', justifyContent: 'center' }}> {/*added inline css styling, flex is basically any element, but it is much more customizable in terms
      of placement, so it was nice in this case to just be able to place it in the middle. JustifyContent is self-explanatory*/}
        <div className="col-6"> {/*Basically there are 12 columns on a webpage for react, so I just said that I want my card to take up 6 of these 12. That means there
        are 3 empty columns on each side since we justified it to the middle.*/}
          <div className="row"> {/* added a row next */}
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
                          name="bool"
                          value={true}
                          onChange={(e) => setAnswer(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="pr-3">
                        <input
                          type="radio"
                          name="bool"
                          value={false}
                          checked="true"
                          onChange={(e) => setAnswer(e.target.value)}
                        />
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
export default function App() {
  // Make questions with types
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerType: "integer",
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerType: "boolean",
    },
  ];
  const [answer1, setQuestionsAnswered1] = useState(0);
  const [answer2, setQuestionsAnswered2] = useState(0);
  const [answer3, setQuestionsAnswered3] = useState(0);
  const [answer4, setQuestionsAnswered4] = useState(0);

  // this returns an array of question components
  return (
    <div className="app">
      {questions.map((q) => {
        return (
          <Question questionText={q.questionText} answerType={q.answerType} />
        );
      })}
    </div>
  );
}
