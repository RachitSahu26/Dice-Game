import React from 'react'
import "./GamePLay.css";

export default function GamePlay() {

  const arrayNumber = [1, 2, 3, 4, 5, 6];
  return (
    <>

      <header className='play-main'>
        <div className="right">
          <h1>0</h1>
          <p>Total Score</p>
        </div>

        <div className="Left">
          { arrayNumber.map((value, i) => {
              <button className='btn-select'>{value}</button>

            })}
          {/*       
          <button className='btn-select'>3</button>
          <button className='btn-select'>1</button>
          <button className='btn-select'>2</button>
      
          <button className='btn-select'>4</button>
          <button className='btn-select'>5</button>
          <button className='btn-select'>6</button> */}


          <p>Select Number</p>
        </div>



      </header>
      <div className="main">

        <div className="play-img">

          <a href="https://www.freepnglogos.com/pics/dice" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/dice-png/dice-png-images-are-download-crazypngm-crazy-png-images-download-32.png" width="300" alt="dice png images are download crazypngm crazy png images download" /></a>
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
