const one =400
console.log(one)
const objnum =new Number(700.58798667765)
const objnum22 =new Number(BigInt(7005879566586565565))

const copy = objnum.toString()
console.log(copy);
console.log(typeof copy);copy



console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");


const real = objnum.toFixed()
console.log(real);
console.log(typeof real);
console.log(objnum.toPrecision(3));

console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxx");
const rk = objnum22.toLocaleString( )
console.log(rk);
console.log(typeof rk);

console.log("xxxxxxxxxxxxx constructor   xxxxxxxxxxx");


const check = new Number(700)

console.log(check.constructor) //show number function

const check2 = 69
console.log(check2.constructor) //show number function

const check3 = "rakes"
console.log(check3.constructor) //show String function




if (check.constructor === Number) {
  console.log("This is a Number object or primitive.");
}
else {
    console.log("notpre");

}

const ex = new Number(600)
//convert number into scientifice number
console.log(ex.toExponential());

















