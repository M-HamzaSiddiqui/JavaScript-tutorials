//Q-1

let marks={
    hamza:35,
    rohan:4,
    golu:323
  }
  
  //method 1 using for-in loop
  for(let i in marks){
    console.log("marks of "+i+" are "+marks[i]);
  }
  
  // method 2 using plain for loop
  for(let i=0;i<Object.keys(marks).length;i++)   //Object.keys(marks) this return an array of keys in the object.
    {
      console.log("marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]]);
    }
  
  //Q-2
  
  let correctNumber=23;
  let i=prompt("enter the number");
  while(i!=correctNumber){
    console.log("Try again");
    i=prompt("enter the correct number");
  }
  
  //Q-3
  
  let mean=(a,b,c,d)=>{
    return (a+b+c+d)/4;
  }
  
  console.log("the mean of 1,3,,3,5 is "+mean(1,3,3,5))