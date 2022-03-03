//--------------------------PRIMO ESERCIZIO--------------------\\

//chiedo all'utente di iserire una parola e creo una costante per il risultato del ciclo

const userPhrase = prompt('inserisci una parola').toLowerCase();
let phrasePalindroma = '';
//sapendo che promp ci torna una stringa controllo ogni lettera di indice [i] e la confronto con la sua opposta
for(let i = 0; i < userPhrase.length; i++){
    if( userPhrase[i] == userPhrase[(userPhrase.length - i) - 1]){
        phrasePalindroma = true;
    }else{
        phrasePalindroma = false;
    }   
}
//avendo ora un valore booleano stampo in console se è palindoma o no
if( phrasePalindroma == true){
    console.log('è palindroma');
}else{
    console.log('non è palindroma');
}

//-------------------------SECONDO ESERCIZIO--------------------\\

//Chiedo all'utente di scegliere pari o dispari e un numero
const userOddOrEven = prompt('Pari o Dispari ?').toLowerCase();
//verifico che sia sempre minuscolo
console.log(userOddOrEven);
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 100'));
console.log(userNumber);
//creo una costante che tramite la funzione generi e ritorni un numero randomico tra 1 e 100
const pcNumber = randomNumber(0); 

function randomNumber (num1){
    num1 = Math.floor((Math.random() * 100) + 1);
    return num1;
}
//la stampo a console per verificarne il funionamento
console.log(pcNumber);

let somma = userNumber + pcNumber;
console.log(somma);

function isEven(num2){
    if(num2 % 2 == 0){
        return true;
    }else{
        return false;
    }
}

if((isEven(somma)) && (userOddOrEven == 'pari')){
    console.log('HAI VINTO!!');
}else if (!(isEven(somma)) && (userOddOrEven == 'dispari')){
    console.log('HAI VINTO!!');
}else{
    console.log('HAI PERSO!!');
}
