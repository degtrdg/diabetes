import React, { useState } from "react";
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
  const [answer, setAnswer] = useState(0);
  if (props.answerType === "integer") {
    [answer, setAnswer] = useState(0);
  } else {
    [answer, setAnswer] = useState(false);
  }
  if (props.answerType === "integer") {
    setAnswer(0);
    return (
      <div>
        <p>{props.questionText}</p>
        <input
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h1>{props.questionText}</h1>
        <input
          type="checkbox"
          name="true"
          value={true}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <input
          type="checkbox"
          name="false"
          value={false}
          checked="true"
          onChange={(e) => setAnswer(e.target.value)}
        />
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

  // this returns an array of question components
  return (
    <div className="app">
      {questions.map((q) => {
        <Question questionText={q.questionText} answerType={q.answerType} />;
      })}
    </div>
  );
}
