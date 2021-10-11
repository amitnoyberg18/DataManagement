import React, { useState } from "react";
import Answer from "./Answer";
import Question from "./Question";

const App = () => {

    const [questions,setQuestions] = useState(["גיל","מין"]);
    const [isActive,setIsActive]=useState(()=>{
        const array=[];
        for (let i = 0; i < questions.length; i++) {
            array[i]=false;            
        }
        return array;
    });

    //first we need to get the questions and the answers from the server
        const openQuestion=(index)=>{
            setIsActive(prevState => prevState.map((item, idx) => idx === index ? !item : item));
            
        }

    return (  
        <ul className="questionslist">
            {questions.map((question,index)=>{
                //in the future we need to write code in hear to find the question answer
                return <li className='listitem' key={index} onClick={()=>openQuestion(index)}>
                    
                    {question}
                    {isActive[index] && <Answer question={question}/>}
                </li>
            })}
        </ul>
    );
}
 
export default App;