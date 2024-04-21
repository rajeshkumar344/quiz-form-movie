import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Hompage() {
    const navigate = useNavigate()
    function goTo(){
        navigate("/qtn")
    }
    


  return (
    <div>
      <button className='btn btn-success'onClick={goTo} style={{margin :40}} >Start Quiz</button>

    </div>
  )
}
