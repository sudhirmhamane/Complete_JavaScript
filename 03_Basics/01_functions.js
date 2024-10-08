// function is a like a package so we use it where we want.

/*  In JavaScript, functions are fundamental building 
    blocks that allow you to encapsulate code into reusable blocks. 
    A function can take input, process it, and return a result. 
    Functions are objects in JavaScript, and they can be assigned to variables, passed as arguments, 
    and returned from other functions. */


function greet(sudhir) {
    return "Hello, " + sudhir + "!";
}
  
  //console.log(greet("sudhir"));  // Output: Hello, sudhir!

function addTwoNum(num1,num2){
    let sum = num1 + num2;
    return sum;
}

const result = addTwoNum(12, 23)
// console.log("Result : ", result);

function loginUserMessage(userName = "sammy"){

    if(!userName){
        console.log("please enter the username");
        return
    }
    return `${userName} just logged in`
}
console.log(loginUserMessage("sandy"))

function calCartPrize(...num1){
    return num1
  }
  //console.log(calCartPrize(200, 300, 400, 500, 600));
  

  const user = {
    userName : "sudhir",
    lastName : "mhamane"
  }

  function handleObjects(anyObject){
    //console.log(`username is ${anyObject.userName} and the last name is ${anyObject.lastName}`);
    
  }

  handleObjects(user)

  const myArray = [100, 200, 300, 400]

  function returnSecondValue(getArray){
    return getArray[2]
  }

  console.log(returnSecondValue(myArray))

  
