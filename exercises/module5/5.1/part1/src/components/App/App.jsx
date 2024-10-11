import { Context as counterContext } from '../../contexts/counterContext'
import { useContext } from 'react'
import './App.css'
import BadButton from '../Button/BadButton'
import GoodButton from '../../components/Button/GoodButton '
import OkButton from '../../components/Button/OkButton'
import ResetButton from '../Button/ResetButton'

function App() {

  const { good, ok, bad } = useContext(counterContext)
  

  return (
    <div>
      <h1>exercice 5.1</h1>
      *good: {good} <GoodButton/> <br/>
      *ok: {ok} <OkButton/> <br/>
      *bad: {bad} <BadButton/> <br/>
      <ResetButton/>
    </div>
  )
}

export default App
