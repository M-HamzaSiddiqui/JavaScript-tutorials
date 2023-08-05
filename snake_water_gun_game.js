let string='SWG'
let min=0,max=2

let generate=()=>{
  let index=Math.floor(Math.random()*(max-min+1)+min)
  return string[index]
}

let noOfTry=1
let score=0
let machScore=0


while(noOfTry<=3){
  alert(`this is try no. ${noOfTry}`)
  let machChoice=generate()
  console.log(machChoice)
   userInput=prompt(`Enter you choice again for try ${noOfTry}: `)
if(userInput===machChoice)
{
  score=0,machScore=0
  noOfTry++;
}

else if(userInput=='G'&&machChoice=='S')
{
  score=score+1
  noOfTry++;
}
else if(userInput=='W'&&machChoice=='G')
{
  score=score+1
  noOfTry++;
}
else if(userInput=='S'&&machChoice=='Water')
{
  score=score+1
  noOfTry++;
}
else{
  score=score,machScore+=1
  noOfTry++;
}
}

if(score>machScore)
  console.log("You won and your score is: ",score)
else if(score==machScore)
  console.log("That's a tie")
else
  console.log("You lost and your score is: ",score)