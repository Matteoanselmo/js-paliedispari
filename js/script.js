const userPhrase = prompt('inserisci una parola');
let phrasePalindroma = '';

for(let i = 0; i < userPhrase.length; i++){
    if( userPhrase[i] == userPhrase[(userPhrase.length - i) - 1]){
        phrasePalindroma = true;
    }else{
        phrasePalindroma = false;
    }   
}

if( phrasePalindroma == true){
    console.log('è palindroma');
}else{
    console.log('non è palindroma');
}

//------------SECONDO ESERCIZIO---------------\\

