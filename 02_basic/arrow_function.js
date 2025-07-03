// const printThis = {
//     name:'ranjan',
//     print: function (){
//         console.log(` ${this.name} , Wellcome to code help webside`);
//         console.log(this)

//     }
// }
// console.log(printThis.print())

// printThis.name = 'rames'

// console.log(printThis.print())
// console.log(this);

// function one (){
//     let name = 'monahor'
//     console.log(this.name);
    
// }
// one()

// const two = function (){
//     const username = "Bickrom"
//     console.log(this);
    
// }
// two()
// const three = () => {
//     const gender = "male"
//     console.log(this);
    
// }
// three()


// const obj = {
//     name: "Ranjan",
//     normalFunc: function () {
//         console.log("Normal function:", this.name); // ✅ this → obj
//     },
//     arrowFunc: () => {
//         console.log(this); // ❌ this → outer/global
//     }
// };

// obj.normalFunc(); // Output: "Normal function: Ranjan"
// obj.arrowFunc();  // Output: "Arrow function: undefined"




            //   normal arraw function 

const arrow = (num1 ,num2,num3 = 60) => {
return num1 + num2 +num3
}            

console.log(arrow(8,null))
// const arrow2 = arrow(8,null,81)
// console.log(typeof arrow2);


            //    implicity arrow function 

// const implicity =  (num1,num2) => (num1 + num2)     
// console.log(implicity(8,9));


const implicity =  (num1,num2) => ({name:"das monohor"})     
console.log(implicity(8,9));


const myArrafy  = [7,9,0,3,5,5,1.6,5]
// myArrafy.forEach(function (kunu,kunu2) {console.log(myArrafy[kunu2] = 6)})
// console.log(myArrafy);

myArrafy.forEach( (index,index2) => (console.log(index[index2] = 10)))
console.log(myArrafy);


myArrafy.forEach((value, value2 ) => (console.log({value2 : value})))


