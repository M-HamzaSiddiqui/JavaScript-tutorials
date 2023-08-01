//For loops in javascript

//Basic for loop in javascript

let n=prompt("enter the value of n: ")
let sum=0;

for(let i=1;i<=n;i++)
  {
    sum+=i;
  }
console.log(sum);

//For-in loop

let obj={
  hamza:38,
  daiyan:983,
  rahul:202
}

for(let a in obj){
  console.log("Marks of "+a+" are "+obj[a]);
}

//for-of loop

for(let b of "hamza"){
  console.log(b);
}