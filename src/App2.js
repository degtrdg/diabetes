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
    {
      questionText: "Who is CEO of Tesla?",
      answerType: "boolean",
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerType: "integer",
    },
  ];
  const [answer1, setQuestionsAnswered1] = useState("unanswered");
  const [answer2, setQuestionsAnswered2] = useState("unanswered");
  const [answer3, setQuestionsAnswered3] = useState("unanswered");
  const [answer4, setQuestionsAnswered4] = useState("unanswered");
  var checked = () => {
    if (
      answer1 === "unanswered" ||
      answer2 === "unanswered" ||
      answer3 === "unanswered" ||
      answer4 === "unanswered"
    ) {
      return false;
    }

    // this returns an array of question components
    return (
      <div className="app">
        return (
        <Question
          answer1={answer1}
          questionText={questions[0].questionText}
          answerType={questions[0].answerType}
        />
        <Question
          answer2={answer2}
          questionText={questions[1].questionText}
          answerType={questions[1].answerType}
        />
        <Question
          answer3={answer3}
          questionText={questions[2].questionText}
          answerType={questions[2].answerType}
        />
        <Question
          answer4={answer4}
          questionText={questions[3].questionText}
          answerType={questions[3].answerType}
        />
        {/* <button onClick={null ? checked() : SubmitEvent()}>Submit</button> */}
      </div>
    );
  };
}
