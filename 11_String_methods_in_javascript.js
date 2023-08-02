//String methods in Javascript

//strings are immutable and cannot be changed.

let name="Hamza"
console.log(name.length)

console.log(name.toUpperCase())
console.log(name.toLowerCase())

let veg='baigan'
console.log(veg.slice(2,5))
console.log(veg.slice(2))

console.log(veg.replace('igan','ar'))
console.log(veg)

let lastname=' Siddiqui'
console.log(name.concat(lastname))
console.log(name)

let fal='    Anaar       '
console.log(fal.trim())
console.log(fal.length)

for(let i in lastname){
  console.log(lastname[i])
}