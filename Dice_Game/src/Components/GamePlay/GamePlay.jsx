import React from 'react'
import "./GamePLay.css";
import Numbers from '../NumberBox/Numbers';



export default function GamePlay() {



 const generateRandomNumber=(max,min)=>{
return Math.floor(Math.random()*(min-max)+min);
  }
  return (
    <>

      <header className='play-main'>
        <div className="right">
          <h1>0</h1>
          <p>Total Score</p>
        </div>

        <div className="Left">
          <Numbers />
          <p>Select Number</p>
        </div>



      </header>
      <div className="main">

        <div className="play-img">
          <img src="/Images/1.png" width={100} className='dice-img' 
          onClick={()=>generateRandomNumber()}/>
          <p>Click on Dice to Roll</p>
        </div>
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

