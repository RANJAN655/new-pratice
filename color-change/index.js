const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
let currentColor = ''; // to track current background color

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        const color = e.target.id;
        
        if (currentColor === color) {
            body.style.backgroundColor = 'white'; // reset to original
            currentColor = ''; // clear current color
        } else {
            body.style.backgroundColor = color;
            currentColor = color; // set current color
        }
    });
});
