import React, { useState } from 'react'
import styled from "styled-components";

export default function Numbers() {
    const Numbers = [1, 2, 3, 4, 5, 6];
const [selectNumber,setSelectNumber]=useState();
    return (

        <NumberSelector >
<div className='flex'>

            {
                Numbers.map((value, i) => (
                    <Box
                    isselected={value===selectNumber}
                    onClick={()=>setSelectNumber(value)}
                    
                    >{value}</Box>

                    ))
                }

                </div>
        </NumberSelector>



    )
}
const NumberSelector=styled.div`
.flex{
 display:flex;   
    gap:24px; 
    margin-left: 63px;
}
`
    
const Box = styled.div `
border: 2px solid black;
    font-size: 33px;
    text-align: center;
    width:50px;
background-color: ${(props)=>props.isselected ? "black":"white"};
color: ${(props)=>props.isselected ? "white":"black"};

cursor: pointer;
    height: 50px;
display: grid;
`