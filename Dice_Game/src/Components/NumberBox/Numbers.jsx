import React, { useState } from 'react'
import styled from "styled-components";

export default function Numbers({ setError, error, selectNumber, setSelectNumber }) {

    const Numbers = [1, 2, 3, 4, 5, 6];


    const errorHandelor = (value) => {
        setSelectNumber(value)
        setError("")
    }
    return (

        <NumberSelector >
            <p className='erorr-para'>{error}</p>
            <div className='flex'>

                {
                    Numbers.map((value, i) => (
                        <Box
                            isselected={value === selectNumber}
                            onClick={() => errorHandelor(value)}

                        >{value}</Box>

                    ))
                }

            </div>
        </NumberSelector>



    )
}
const NumberSelector = styled.div`
.flex{
 display:flex;   
 /* background-color: green; */

    gap:24px; 
    margin-left: 333px;

}


.erorr-para{
    /* background-color: aqua; */
color: red;
margin-top: -22px;
/* margin-right: 73px; */
font-size: 25px;
}
`

const Box = styled.div`
border: 2px solid black;
    font-size: 33px;
    text-align: center;
    width:50px;
background-color: ${(props) => props.isselected ? "black" : "white"};
color: ${(props) => props.isselected ? "white" : "black"};

cursor: pointer;
    height: 50px;
display: grid;

`