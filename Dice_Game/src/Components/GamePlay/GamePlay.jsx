import React, { useState } from 'react'
import "./GamePLay.css";
import Numbers from '../NumberBox/Numbers';
import Dice from '../dice/Dice';
import Score from '../Score/Score';
import ShowRule from '../Show rule/ShowRule';



export default function GamePlay() {
  const [selectNumber, setSelectNumber] = useState();

  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);



  const generateRandomNumber = (max, min) => {
    console.log(Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min);
  }




  const diceRole = () => {

    if (!selectNumber) {
      setError("Hey,Player you have not selected any number")
      return;
    }



    const random = generateRandomNumber(1, 7);

    setCurrentDice((prev) => random);

    if (selectNumber === random) {
      setScore((prev) => prev + random);
    } else {

      setScore((prev) => prev - 2);
    }
    setSelectNumber(undefined)
  }


  const resetScore = () => {
    setScore(0);
  }






  return (
    <>

      <header className='play-main'>
        <Score score={score} />

        <div className="Left">
          <Numbers
            setError={setError}
            error={error}
            selectNumber={selectNumber}
            setSelectNumber={setSelectNumber}

          />
          <p>Select Number</p>
        </div>



      </header>
      <div className="main">

        <div className="dice-img-play">
          <Dice currentDice={currentDice}

            diceRole={diceRole}
          />
        </div>
        <p>Click on Dice to Roll</p>
        <div className="btn-area">
          <button className='Resect-score' onClick={resetScore} >Reset Score</button>
          <br></br>
          <br></br>
          <button className='Show-reset'
            onClick={() => setShowRules((prev) => !prev)}
          >
            {showRules ? "Hide" : "Show "}

            Rules</button>

        </div>

      </div>
     
        {showRules && <ShowRule />}










    </>

  )
}

