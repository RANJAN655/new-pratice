// const symb =Symbol("key1")
// const ranjan = {
//     name:"ranjan", 
//     age: 23,
//     'friend': 'sashikanta Nayak',
//     [symb]:"ranjan kumar nayak",
//     gender:'male', 
//     education: "bachlor of computer application", 
//     gole:'complet the js and react js and make 20 preject atlist 10 project is valiable',
// }
// console.log(ranjan[symb]);
// console.log(ranjan ['friend']);
// ranjan.friend = 'rakes';
// console.log(ranjan);


// // Object.freeze(ranjan)
// ranjan.friend = 'das manahor';
// ranjan.age = 40
// console.log(ranjan);

// ranjan.greet = function (){
//     console.log('function is run perperly ');
    
// }
// console.log(ranjan.greet);
// ranjan.greet2 = function (){
//     console.log(`this is place holder in java script and my name is ${this.name}`);
    
// }
// console.log(ranjan.greet2());
// console.log(ranjan);

// // ----------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx---------------------------

//             //    singlition object 
// let obj2 = new Object()
// console.log(obj2);
//                     // normal object 
// let obje3 = {}
// console.log(obje3);
//             //  this two thin give you same out put but  the difference is declaration how you declaration




                //  nested object


 
// let nested = {
//     nested2 : {
//         nested3 : {
//             firstName:'ranjan',
//             lastName: "nayak"
//         }

//     }
        

//     }
//     console.log(nested.nested2?.nested3.firstName);

//     const obj1 ={
//         a:6,
//         b:7,
//     }
//     const obj2 ={
//         c:8,
//         d:9,
//     }
//     console.log(obj1,obj2);
//     obj3 = Object.assign(obj1,obj2)
//     console.log(obj3);
//     console.log(obj1);
//     console.log(obj1 === obj3);

//         //   that why we can use  {} because all the key and value store in a new memory address 

//     obj3 = Object.assign({},obj1,obj2) 
//     console.log(obj1 === obj3);  //this give you false because 1st store in {} then assign to obj3

//     // 1st obj3 secocd obj3 memory address are different it is not const  so we reassign 
//     // if we not use const then the address is change 
//     // thid is the main problem that why we use const that no one change our address 
//     // if we not do our file was correpted
//      a =89
//     console.log(a);
//     // let default key word to declare a variable

//                 // spread operator
// let obj4 = {...obj1,...obj2}                
// console.log("ok",obj4);




            //    object array



const user = [
    {
        name: 'rames',
        age: 98,
        email:'ranjan805@gmail.com',
        collge:"CAC"
    },
    {
        name: 'rames',
        age: 18,
        email:'ranjan805@gmail.com',
        collge:"CAC"
    },
    {
        name: 'rames',
        age: 18,
        email:'ranjan805@gmail.com',
        collge:"CAC"
    },
    {
        name: 'rames',
        age: 18,
        email:'ranjan805@gmail.com',
        collge:"CAC"
    }

]
    



console.log(user[1].age);
console.log(user[1].age = 40);
// console.log(user);
user.forEach((user, index) => {
  console.log(`Object ${index + 1}:`);
  console.log("Keys: ", Object.keys(user));
  console.log("Values: ", Object.values(user));
  console.log("Entries: ", Object.entries(user));
  console.log("-------------");
console.log(user.hasOwnProperty('collge'));

});

const namm ={
    name:'ranjan',
    age:29,
    lastName:'nayak',
    school:'jagannath pur school',
}



        // destructure of a object you can also do on array also
console.log(namm.school);

const {school:college} = namm
console.log(college);












    
    
    
    
    
    
    









