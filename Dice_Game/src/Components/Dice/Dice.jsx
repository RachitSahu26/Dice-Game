import React, { useState } from 'react'



export default function Dice({currentDice, diceRole}) {

   

    return (
        <>

 
            <img src= {`/public/Images/${currentDice}.png`} width={100} className='dice-img' onClick={() => diceRole()} />


        </>




    )
}
