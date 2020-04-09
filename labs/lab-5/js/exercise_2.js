var person = {
    name: 'Pericle Tudor',
    age: 56,
    qualities: [
        'smart',
        'dog lover',
        'empathetic'
    ]
  };


const entries = Object.entries(person)
//console.log(entries)

for (const [key, value] of entries) {
    console.log(`${key}: ${value}\n`)
}