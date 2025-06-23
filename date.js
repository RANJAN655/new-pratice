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



