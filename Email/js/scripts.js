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
            }
    
            else {
                document.getElementById('result').innerHTML =' sbagliata';
                document.getElementById('email-form').reset();
            }
        }

    }

)
