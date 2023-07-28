import React from 'react'
import styled from "styled-components";

export default function Score({score}) {
  return (
    <rightSide>

    <div className="right">
    <h1>
        {score}

    </h1>
    <p>Total Score</p>
  </div>
    </rightSide>
  )
}

const rightSide= styled.div`
    .right{
    margin-left: 133px;
}
.right h1{
font-size:100px;
color: red;
margin-left: 53px;
}.right p{
    font-size: 35px;
}
`