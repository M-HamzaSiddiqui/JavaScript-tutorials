let marks=[12,34,5,2,3,2]
console.log(marks)


//Arrays in javascript can hold data of multiple types.
let list=[123,'Baigan',false,null,undefined]
console.log(list)

console.log(list[1])
console.log(list[6])//this will be undefined because 6th index is not present

list[6]='hello'
console.log(list[6])//arrays in javascript are dynamic in nature so 'hello' will get added to the array 


//length function return the length of an array
console.log(list.length)

//Array are mutable, contrary to strings in javascript
list[1]=20  //updating an element in the array
console.log(list[1])

//Arrays are objects in javascript
console.log(typeof list)

for(let i in list){
  console.log('\n',list[i])
}

