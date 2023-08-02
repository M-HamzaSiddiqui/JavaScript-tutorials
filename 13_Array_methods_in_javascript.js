let a=[1,3,,5,234,56]

// toString function return the array as a string.
let b=a.toString()
console.log(b)
console.log(typeof b)

//.join("character") ,this function joins the elements with the specific character
let c=a.join("_")
console.log(c)
console.log(typeof c)


// .pop() function deletes the last element from the array and returns the popped element,and it changes the original array

let p = a.pop()
console.log(a)
console.log(p)

//push() function adds the element to end of array and return the length of the new array
let d=a.push(4)
console.log(a)


//shift function deletes the first element and return the popped element
let f=a.shift()
console.log(f)


//unshift() function adds the element at the start of array and return the length of the new array
let q=a.unshift(23)
console.log(q)





