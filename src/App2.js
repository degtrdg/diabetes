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
  const [answer, setAnswer] = useState("unanswered");

  if (props.answerType === "integer") {
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
          type="radio"
          name="bool"
          value={true}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <input
          type="radio"
          name="bool"
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
