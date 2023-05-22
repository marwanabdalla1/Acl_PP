import React from "react";


export default function ExerciseView(props) {
    const { _id, name, questionid } = props.exercises;
    console.log(questionid)




    const exerciseElements = questionid.map((question) => {
        //return the id, question, and choice elements for each question
        const { _id, question: qText, choices, answer } = question;

        //without displaying the answer, I want to check if the input the user provided from the radio button matches the answer

        const choiceElements = choices.map((choice, index) => (
          <div key={index}>
            <input type="radio" name={`question_${_id}`} id={`choice_${index}`} value={choice} />
            <label htmlFor={`choice_${index}`}>{choice}</label>
          </div>
        ));


        return (
          <div key={_id} className="question-item">
            <h1>{qText}</h1>
            {choiceElements}
          </div>
        );


        
      });
      


    return (
        <div>
            <p>Welcome</p>
            <h1>{name}</h1>
            {exerciseElements}
        </div>
        
    )

}     