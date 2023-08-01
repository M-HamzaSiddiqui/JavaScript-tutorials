let a=prompt("what's your age");
console.log(a);
console.log(typeof(a));

a=Number.parseInt(a);      //typecasting
console.log(typeof a);   

if(a<9)
{
  console.log("you are a kid you cannot drive")
}
else if(a>9 && a<18)
{
  console.log("you can drive when you are above 18");
}
else
{
  console.log("you can drive");
}

//ternary operator

console.log("you can ",a<18?"not drive":"drive");

const expr="mangoes";
switch(expr){
  case 'Oranges':
    console.log("oranges are 23 rupees per kg");
    break;
  case 'mangoes':
  case 'bananas':
    console.log("mangoes and bananas are 12 rupees per kg");
    break;
  default:
    console.log("wrong option");
}