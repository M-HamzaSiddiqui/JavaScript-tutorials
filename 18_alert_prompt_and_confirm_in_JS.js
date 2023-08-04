alert("Enter a number")
let a=prompt("Enter number here:","26")  //the second argument is default value if no value is provided

let write=confirm("Do you really want the value to get added to the document")
if(write){
  document.write(a)
}


//aler ,prompt and confirm blocks the execution of the script until they get the response
