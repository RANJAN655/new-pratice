function print (){
    console.log("r");
    console.log("a");
    console.log("n");
    console.log("j");
    console.log("a");
    console.log("n");
}
// print //function reference
// print()  //function exucation 

//               //   paramiter
// function addNum (num1,num2){
//     console.log(num1+num2);
// }
// const result = addNum(7,8)   //argument
// console.log(result);  // print undefined because nothin is return in that function you just print







//                 //  paramiter
// function addNum (num1,num2){
//     return num1+num2
// }
// addNum(null,8) 
// const  result = addNum(9,8)   //argument
// console.log(result);




// function userLoginMessage(userMessage = "das") {
//     if(!userMessage){
//         console.log("you need to pass a argument :");
//         return
        
//     }
//     else {
//         return `Thanks ${userMessage} for use our service`


//     }
    
// }
// console.log(userLoginMessage( ));
// // userLoginMessage("ranjan")

                 

                //   using rest operator


function clculateCardPrice(card1,card2,...num1){
    return [card1,card2,num1]

}              
const myArray = clculateCardPrice(200,800,300,600,100,50)
console.log(myArray);



const user = {
    name:"rames" ,
    price: 999,

}

function handleObject (objects){
    console.log(`my name is ${objects.name} and 
        i am a webdeveloper and five years exprience \n 
        and my course price ${objects.price}`);
    

}

handleObject({
    name:'ranjan kumar nayak',
    price: 9990
})

  function myThirdValue(kunu){
    return kunu[2]
  }
//   console.log(myThirdValue(myArray));
  console.log(myThirdValue([5,3,5,7,9,60,78]));

  