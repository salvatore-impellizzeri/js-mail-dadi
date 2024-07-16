const genButton = document.getElementById('generate-num');
genButton.addEventListener('click',
    function(event){
        const userNumber = document.getElementById('user-num');
        const computerNumber = document.getElementById('ai-num');
        const x = Math.floor(Math.random() * 6 + 1);
        const y = Math.floor(Math.random() * 6 + 1);
        userNumber.innerHTML = x;
        computerNumber.innerHTML = y;
        const risultato = document.getElementById('score');
        if(x > y){
            risultato.innerHTML = 'Hai vinto!';
        }

        else if (x == y){
            risultato.innerHTML = 'Hai pareggiato!';
        }

        else {
            risultato.innerHTML = 'Hai perso!';
        }
    }
)