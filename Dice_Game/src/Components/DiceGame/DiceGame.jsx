import React from 'react'
import "./DiceGAme.css"
function DiceGame({toggle}) {
    return (
        <div className='start-game'>


            <div className="dice-img">

                <a href="https://www.freepnglogos.com/pics/dice" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/dice-png/dice-transparent-png-pictures-icons-and-png-backgrounds-0.png" width="500" alt="dice transparent png pictures icons and png backgrounds" /></a><br></br>
                <a href="https://www.freepnglogos.com/pics/dice" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/dice-png/dice-png-images-are-download-crazypngm-crazy-png-images-download-35.png" width="500" alt="dice png images are download crazypngm crazy png images download" /></a>
            </div>

            <div className="dice-title">

                <h1>
                    DICE GAME
                </h1>
<button className='btn' id="play-now" onClick={toggle}> Play Now</button>
            </div>

        </div>
    )
}

export default DiceGame