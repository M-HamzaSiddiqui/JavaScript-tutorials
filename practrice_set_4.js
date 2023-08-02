//Q-1

console.log("Hamza\"".length)

//Q-2
let string="My name is Hamza Siddiqui"
let word='Siddiqui'
console.log(`The word ${word} ${string.includes(word)?'is present':'is not present'} in the string.`)

//Q-3

let string2 = 'This is an elephant'
console.log(string2.startsWith('hello'))
console.log(string2.endsWith('elephant'))

//Q-4

let fruit = 'BaNaNa'
console.log(fruit.toLowerCase())

//Q-5

let string3 ='The amount is 1000'
let amount=string3.slice('The amount is '.length)
amount=Number.parseInt(amount)
console.log(amount)
console.log(typeof amount)

//Q-6

let string4='hello how are you'
console.log(string4[4])
console.log(string4.replace(string4.charAt(4),'d'))  //replace funtion replaces only the first occurence of string or a character