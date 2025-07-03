const ranjan = new Date();
console.log(ranjan)
ranjan.setFullYear(2023)
ranjan.setMonth(10)
ranjan.setDate(23)
ranjan.setHours(0)
ranjan.setMinutes(0)

let monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


let date=ranjan.getDate().toString().padStart(2,'0')
let month=monthNames[ranjan.getMonth()]
let year=ranjan.getFullYear()

let hours = ranjan.getHours().toString().padStart(2,'0')
let minutes =ranjan.getMinutes().toString().padStart(2,'0')
let hour= hours >= 12 ? "PM":"Am"
hours = hours%12 || 12


let formatted =`${date}-${month}-${year}, ${hours}.${minutes}${hour}`
console.log(formatted);
console.log(formatted.toLocaleLowerCase());




/** @type {Intl.DateTimeFormatOptions} */
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
};

console.log(ranjan.toLocaleString('default', options));



console.log(ranjan.toLocaleString('default', {
  weekday: 'narrow',
  year:'2-digit',
  month:'narrow',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
}));








