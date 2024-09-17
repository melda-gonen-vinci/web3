const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const App = () => {
  const name = 'K. A.'
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name='alex' age={age} />
      <Hello name={name} age={15 + age}/>
      <Footer />
    </div>
  )
}


/*
const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}
*/

/*
const App = () => {
  const friends = [ 'Peter ', 'Maya ']

  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}
*/

export default App