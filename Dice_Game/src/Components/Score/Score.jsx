import React from 'react'
import "./Score.css";

export default function Score({score}) {
  return (


    <div className="right">
    <h1>
        {score}

    </h1>
    <p>Total Score</p>
  </div>
 
  )
}

