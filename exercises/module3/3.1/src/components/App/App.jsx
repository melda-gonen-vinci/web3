import { useState } from 'react'
import Statistics from '../Statistics/Statistics'
import Button from '../Button/Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  const handleClick = (e) => {
    if(e.target.value === 'good'){
      setGood(good + 1)
      setAll(allClicks + 1)
    } else if(e.target.value === 'neutral'){
      setNeutral(neutral + 1)
      setAll(allClicks + 1)
    } else {
      setBad(bad + 1)
      setAll(allClicks + 1)
    } 
  }
  return (
    <div>
      <h1>give feedbacks</h1>
        <Button onClick={handleClick} value='good'/>
        <Button onClick={handleClick} value='neutral'/>
        <Button onClick={handleClick} value='bad'/> 
  
      <h1>statistics</h1>
      <Statistics {...{good, neutral, bad}}/>
      
    </div>
  )
}

export default App