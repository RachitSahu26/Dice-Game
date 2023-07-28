import React, { useState } from 'react'
import "./GamePLay.css";
import Numbers from '../NumberBox/Numbers';
import Dice from '../dice/Dice';



export default function GamePlay() {

  const [score,setScore]=useState();
  const [currentDice, setCurrentDice] = useState(1);

  const [selectNumber, setSelectNumber] = useState();






  const generateRandomNumber = (max, min) => {
    console.log(Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min);
}
const diceRole = () => {
    const random = generateRandomNumber(1, 7);

    setCurrentDice((prev) => random);


}







  return (
    <>

      <header className='play-main'>
        <div className="right">
          <h1>0</h1>
          <p>Total Score</p>
        </div>

        <div className="Left">
          <Numbers
            selectNumber={selectNumber}
            diceRole={diceRole}

          />
          <p>Select Number</p>
        </div>



      </header>
      <div className="main">

        <div className="dice-img-play">
          <Dice currentDice={currentDice}

            setCurrentDice={setCurrentDice}
          />
        </div>
        <p>Click on Dice to Roll</p>
        <div className="btn-area">
          <button className='Resect-score' >Reset Score</button>
          <br></br>
          <br></br>
          <button className='Show-reset'>Show Rules</button>

        </div>

      </div>


    </>

  )
}

