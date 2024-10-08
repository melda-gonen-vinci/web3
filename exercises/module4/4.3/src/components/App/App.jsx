import Person from 'components/Person/Person'
import { useState , useEffect} from 'react'
import personService from '../../../src/services/persons'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll] = useState(true)

  useEffect(() => {    
    console.log('effect')    
    personService
      .getAll()
      .then(initialPersons => {        
        console.log('promise fulfilled')        
        setPersons(initialPersons)      
      })
      }, [])  
    console.log('render', persons.length, 'persons')

  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.content.toLowerCase().includes(newName.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.content === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person =>
        <Person key={person.id} person={person}/>)}
      </ul>
    </div>
  )
}

export default App