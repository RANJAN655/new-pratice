        let randomNumber = Math.round(Math.random()*100 + 1)
        const submit = document.querySelector('#subt')
        const inputValue = document.querySelector('#guessFields')
        // console.log(inputValue);
        const resultParas = document.querySelector('#resultParas')
        const guesses = document.querySelector('.guesses')
        const lastResult = document.querySelector('.lastResult')
        const lowOrhigh =document.querySelector('.lowOrhigh')


        const p = document.createElement('p')
        // let prevguess = [];
        // console.log(prevguess);
        
        let numguess = 1

        let playGame = true

        if (playGame) {
            submit.addEventListener('click' , function (e) {
                e.preventDefault();
                const values = parseInt(inputValue.value);
                validGuess(values)
                // console.log(values);
                // validGuess(values);
                
            });
            
        }

        function validGuess(guess) {
            if ( guess === '' || guess < 0 || isNaN(guess) || guess > 100) {
                alert('please enter a valid input : ')
                inputValue.value =''
                
            }
            else{
                // prevguess.push(guess)
                if (numguess === 5) {
                    displayGuess(guess)
                    displayMessage(`game is over the random number is : ${randomNumber}`)
                    endgame()
                    
                }
                else{
                    displayGuess(guess)
                    checkGuess(guess)
                }
            }
            
        }

        function displayGuess(guess){
            inputValue.value = ''
            // prevguess.innerHTML += `${guess} `
            guesses.innerHTML += `${guess}  , `

            
            lastResult.innerHTML = `${5 - numguess}`
            numguess++;





        }
        function checkGuess(guess){
            if (guess === randomNumber) {
                // console.log('you guess right');
                 displayMessage(`you guess right ${randomNumber}`);
                
                endgame()
            }
            else if(guess > randomNumber){
                displayMessage(`your number is too high`);
                
            }
            else if(guess < randomNumber){
                // console.log('guess number is too high');
                displayMessage(`your number is too low`);
                
            }



        }
        function displayMessage(message){
            lowOrhigh.innerHTML= `<h1> ${message} </h1>`

        }
        function newgame(){
            const rk = document.querySelector('#rk')
            rk.addEventListener('click',function(){
                randomNumber = Math.round(Math.random()*100 + 1)
                // prevguess = [];
        
                numguess = 1
                lastResult.innerHTML = `${10 - numguess}`
                guesses.innerHTML = ''
                inputValue.removeAttribute('disabled')
                resultParas.removeChild(p)

                playGame = true ;

                

                

            })
            



        }
        function endgame(){
            inputValue.value = ''
            inputValue.setAttribute('disabled','')
            // p.classList.add('button')
            p.innerHTML = `<button id="rk">start a new game</button>`
            resultParas.append(p);
            playGame = false;
            newgame();


        }



