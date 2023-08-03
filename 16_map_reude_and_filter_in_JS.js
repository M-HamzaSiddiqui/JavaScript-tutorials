let num=[23,35,645,323]

//map function
//map function calls a funtion for each element in array and returns a new array.
//forEach() function does not return an array while map() function returns a new array.
// Syntax:- arr_name.map(value,index,array)

let a =num.map((element)=>{
  return element*element;
})

console.log(a)

//Array filter method
//Filters an array with values that pass a test.

let num2=[234,32,34,53,3,2,1,6]
let a2=num2.filter((element)=>{
  return element<10
})
console.log(a2)

//Array reduce method
// This function reduces the array to a single array

let num3=[2,3,1,3,5]
let a3=num3.reduce(add)

function add(sum,num){
  return sum+num
}
console.log(a3)

//map,filter return a new array and reduce returns a single value.
