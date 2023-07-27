import { useState } from "react";
import DiceGame from "./Components/DiceGame/DiceGame";
import GamePlay from "./Components/GamePlay/GamePlay";

export default function App() {

  const [isGamePlay, setIsGamePlay] = useState(false);
  const toggleGamePlay = () => {
    setIsGamePlay((prev) => !prev);
  }

  return (
<> {isGamePlay ?  <GamePlay />:<DiceGame toggle={toggleGamePlay}/>}</>
  )
}
