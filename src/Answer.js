import React, { useState } from "react";

const Answer = ({question}) => {

    const [answers,setAnswers]=useState([question]);
    

        //we will have here a fetch function that will get the answers for the Question
        return (                          
            <ul>
                {answers.map((answer, index)=>{
                    return <li className="sublistitem" key={index}>{answer}</li>
                })}
            </ul>
        );                  

}
 
export default Answer;