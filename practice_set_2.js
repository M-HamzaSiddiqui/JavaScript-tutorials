console.log("Practice Set 2");

//Q-1
let a=prompt("what is your age: ");
if(a>10&&a<20)
  console.log("the age is correct");
else
  console.log("the age is not correct");

//Q-2

switch(a){
  case 12:
    console.log("your age is 12");
    break;
  case 18:
    console.log("your age is 18");
    break;
  defualt:
  console.log("your age is not known");
}

//Q-3

let n=6
if(n%2==0 && n%3==0)
  console.log("the no. is divisible")
else
  console.log("the no. is not divisible")

//Q-4
let c=15
if(c%2==0 || c%3==0)
  console.log("the no. is divisible")
else
  console.log("the no. is not divisible")

//Q-5

let age=a>18?"you can drive":"you cannot drive";
console.log(age);