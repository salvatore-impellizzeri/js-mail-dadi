const Emails = ["salvatoreimpellizzeri2001@gmail.com", "gaetanovenuto99@live.it", "alessiovietri@boolean.careers.com"];
console.log('Emails:', Emails, typeof Emails)
const diceContainer = document.getElementById('dice');

const myButton = document.getElementById('button');

myButton.addEventListener('click',
    function(event) { 
        const myEmail = document.getElementById('email').value;
        console.log('myEmail', myEmail, typeof myEmail);

        for (i = 0; i < Emails.length; i++) {
            if (Emails.includes(myEmail)) {              
                document.getElementById('result').innerHTML = ' corretta';

                diceContainer.classList.replace("d-none", "d-block");

            }
    
            else {
                document.getElementById('result').innerHTML =' sbagliata';
            }
        }

    }

)

const genButton = document.getElementById('generate-num');
genButton.addEventListener('click',
    function(event){
        const userNumber = document.getElementById('user-num');
        const computerNumber = document.getElementById('ai-num');
        const x = Math.floor(Math.random() * 6 + 1);
        const y = Math.floor(Math.random() * 6 + 1);
        userNumber.append(x);
        computerNumber.append(y);
    }
)