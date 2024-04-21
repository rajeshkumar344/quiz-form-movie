import React from 'react'
import { useNavigate } from 'react-router-dom'
import Result from './Result'


export default function Question() {



    const quizQtns =[
        {
        question : "who is current PM of India",
        A : "Modi",
        B : "Yogi adityanath",
        C : "Rahul Gandhi",
        D : "sonia Gandhi",
        Answer : "A",
        },
        {
            question : "what is the use of css",
            A : "Graphical uses",
            B : "styling the web page",
            C : "Both A & B",
            D : "None",
            Answer : "B",
            },
            {
                question : "who is the use of routing",
                A : "used for navigation",
                B : "store data",
                C : "Both A & b",
                D : "create Link",
                Answer : "A",
                },
                {
                    question : "what is the capital of Telangana",
                    A : "Bangalore",
                    B : "Chennai",
                    C : "Hyderabad",
                    D : "Delhi",
                    Answer : "C",
                    },
                    {
                        question : "what is the currency of India",
                        A : "Dollar",
                        B : "Riyad",
                        C : "Rupee",
                        D : "None",
                        Answer : "C",
                        },
            ]

    const [page, setPage] = React.useState(0)
    const [option, setOption] =React.useState("")
  
    const [score, setScore] = React.useState(0)
 
console.log("score",score)
console.log(quizQtns[page].Answer)
   const navigate = useNavigate()

    function nextQtn (){
        if(option === quizQtns[page].Answer){
            setScore(score + 1)
            
        }  
        setPage(page+1)        
    }
    function submitQtn(){
       
        if(option === quizQtns[page].Answer){
            setScore(score + 1)
            
        }
        navigate("/rst")
      
    }
  
  return (
    <div>
    
      <h2>Q : {quizQtns[page].question}</h2>
      <button className='btn btn-primary 'onClick={()=>setOption("A")}> A. {quizQtns[page].A}</button><br/><br/>
      <button className='btn btn-primary'onClick={()=>setOption("B")}> B. {quizQtns[page].B}</button><br/><br/>
      <button className='btn btn-primary 'onClick={()=>setOption("C")}> C. {quizQtns[page].C}</button><br/><br/>
      <button className='btn btn-primary 'onClick={()=>setOption("D")}>D.  {quizQtns[page].D}</button><br/><br/>
     
    {page === quizQtns.length-1 ? <button className='btn btn-success btn-lg' onClick={submitQtn}>submit</button> : 
    <button className='btn btn-success btn-lg' onClick={nextQtn}>Next</button>}
               <Result data={ {myScore : score}}/>
    </div>
  )
}
