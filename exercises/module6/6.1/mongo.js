const mongoose = require('mongoose')
const args = process.argv.slice(2)

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://meldagonen:${password}@cluster0.3jpkw.mongodb.net/phonebook?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', phonebookSchema)

if(args.length < 2) {
    Person.find({}).then(result => {
        console.log('phonebook:')
        result.forEach(person => {
        console.log(person.name, person.number)
        })
        mongoose.connection.close()
    })
    return
} else {

const person = new Person({
  name: args[1],
  number: args[2],
})

person.save().then(result => {
  console.log('added', result.name, 'number', result.number, 'to phonebook')
  mongoose.connection.close()
})
}