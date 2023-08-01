//string is a collection of characters.
let name="Hamza"
console.log(name.length)

console.log(name[0])
console.log(name[1])

//Template literals

let boy1="Golu"
let boy2="Baigan"

console.log(`${boy1} is friend of ${boy2}`);


//Escape sequence characters

let fruit="Bana\'na";
console.log(fruit)
fruit="Bana\rna"
console.log(fruit)
console.log(fruit.length)

let fruit2="Banan'a"
console.log(fruit2)

let fruit3="san\rtara" ///r is called carriage return ,it moves the cursor to the beginning and replaces the starting characters with the characters ahead of it.
console.log(fruit3)