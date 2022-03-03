//--------------------------PRIMO ESERCIZIO--------------------\\

//chiedo all'utente di iserire una parola e creo una costante per il risultato del ciclo

const userPhrase = prompt('inserisci una parola');
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



