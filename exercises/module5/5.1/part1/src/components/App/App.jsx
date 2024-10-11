import { Context as counterContext } from '../../contexts/counterContext'
import { useContext } from 'react'
import './App.css'

function App() {

  const { good, ok, bad, increaseGood, increaseOk, increaseBad, resetAll } = useContext(counterContext)
  

  return (
    <div>
      <h1>exercice 5.1</h1>
      *good: {good} <button className="button" onClick={increaseGood} value='good'>increase good</button> <br/>
      *ok: {ok} <button className="button" onClick={increaseOk} value='ok'>increase ok</button> <br/>
      *bad: {bad} <button className="button" onClick={increaseBad} value='bad'>increase bad</button> <br/>
      <button className="button" onClick={resetAll} value='reset'>reset scores</button> 
      
    </div>
  )
}

export default App
