import { useState } from "react"


const Display = ({counter}) =>  <div>{counter}</div>

const Button = ({onclick, text}) => <button onClick={onclick}>{text}</button>
  

const App = () => {
  const [counter,setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter+1)
  const setToZero = () => setCounter(0)
 
  return (
    <div>
      <Display counter={counter}/>
      <Button onclick={increaseByOne} text = "plus"></Button>
      <Button onclick={setToZero} text = "zero"></Button>
      
      
    </div>
  )
}
export default App