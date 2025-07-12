const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
let changeClick = ''
buttons.forEach( (button) => {
    console.log(button);
    button.addEventListener('click' ,function(e){
        const color = e.target.id 
        if (changeClick === color) {
            body.style.backgroundColor = 'white'
            changeClick = ''
            
        }
        else{
            body.style.backgroundColor = color
            changeClick = color

        }

    })
    
})