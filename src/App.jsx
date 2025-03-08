import { useState } from "react"

const Button = ({onClick, text}) =>{
  return(
    <button onClick = {onClick}>{text}</button>
  )

}

const History = ({allClicks}) =>{
  if (allClicks.length == 0) {
    return(
      
      <div>
        <p>the app is used by pressing the buttons</p>
      </div>
    )
  }
  return ( <div>
    
    
    <p>Button press History: {allClicks.join('')}</p>

    
  </div>
  )
}

const App = () => {
  const [left,setLeft] = useState(0)
  const [right,setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total,setTotal] = useState(0)

  const handleLeftClicks = () =>{
    setAll(allClicks.concat("L"))
    setLeft(left + 1)
    setTotal(total + 1)
  }
  const handleRightClicks = () =>{
    setAll(allClicks.concat("R"))
    setRight(right + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      {left}
      <Button onClick = {handleLeftClicks} text = {"Left"}></Button>
      <Button onClick = {handleRightClicks} text = {"Right"}></Button>

      {right}
      <History allClicks = {allClicks}></History>
      <p>{total} Total</p>
     
      
    </div>
  )
}

export default App