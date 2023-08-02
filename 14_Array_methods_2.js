//Array methods 2

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let num2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let arr3=['hello','buy']



// delete operator

// delete is not a function, rather it's an operator which deletes an element in the array without changing the length of the array.

delete num[0]
console.log(num.length)
console.log(num)
console.log(num.length)

// concat() function in javascript

// concat() function in javascript joins two arrays and return it as a single array


let num3=num.concat(num2,arr3)
console.log(num3)


// sort() function in javascript
// sort() function sorts the original array alphabetically

let num4 = [61, 22,8, 33, 74, 15,47, 38, 19, 10]

// num4.sort()


//to sort the array in ascending order the sort() function takes a custom funtion as the argument.
// That custom function takes two argument and return a positive, or a negative, or zero according to which the sort funtion sorts the elements.

// -1: if the value you're comparing on the left is less than the right.
// 0: if the value you're comparing on the left is equal to the right.
// 1: if the value you're comparing on the left is greater than the right.

let compare=(a,b)=>{
  return a-b
}

num4.sort(compare)
console.log(num4)


// reverse() function 
// reverse() function reverses the original array

num4.reverse()
console.log(num4)


// splice and slice
//splice(index from where to remove, how many to remove, elements to be added)
// it changes the original array
// it returns the deleted items


num4.splice(2,3,1323,23423,342324,34234)
console.log(num4)

//slice() funtion slices out elements and create a new array
// let newArr=num4.slice(2)
let newArr=num4.slice(2,4)
console.log(newArr)