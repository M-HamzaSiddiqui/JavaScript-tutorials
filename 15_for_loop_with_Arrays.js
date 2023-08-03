let num=[3,5,2,3,1]

//forEach() function 

num.forEach((element)=>{
  console.log(element*element)
})

console.log(num)


//Array.from() function
let name='Hamza'
let arr=Array.from(name)
console.log(typeof arr)
console.log(arr)

//for-of loop
//fetches the value of iterable
for(let i of num)
  console.log(i)

//for in loop 
// fetches the keys in object
for(let i in num)
  console.log(i)

console.log(typeof num)

