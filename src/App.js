import "./styles.css";
import ClickSquare from "./ClickSquare";
import { useState } from "react";

export default function App() {

  const [computerSelection, setComputerSelection] = useState("");
  const [winLose, setWinLose] = useState("")

  const randomColor = (min, max) => {
    let colorArray = ['orange', 'purple', 'black']
    let colorNumber = Math.floor(Math.random() * (1 + max - min) + min)
    setComputerSelection(colorArray[colorNumber])
  }

  const orangeRegister = () => {
    if (computerSelection === 'orange') {
      setWinLose("You Won")
    } else {
      setWinLose("Try Again")
    }
  }
  const purpleRegister = () => {
    if (computerSelection === 'purple') {
      setWinLose("You Won")
    } else {
      setWinLose("Try Again")
    }
  }
  const blackRegister = () => {
    if (computerSelection === 'black') {
      setWinLose("You Won")
    } else {
      setWinLose("Try Again")
    }
  }

  return (
    <>
      <div className="title"> Color Block Game </div>
      <div className="instructions"> Pick the correct color block to win. </div>
      <div className="grid">
        <ClickSquare className="orangeBlock" register={orangeRegister} />
        <ClickSquare className="purpleBlock" register={purpleRegister} />
        <ClickSquare className="blackBlock" register={blackRegister} />
        <button onClick={() => randomColor(0, 2)}>Check</button>
        <div>{winLose}</div>
      </div>
    </>

  )
}

