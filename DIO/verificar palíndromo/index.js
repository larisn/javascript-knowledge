//solução 1
function verificarPalindromo(string) {
    if(!string) return 'string inexistente'; // já está verificando se é um valor diferente de true, entao automaticamente vai ser null, empty ou undefined, não precisando colocar um else 

    return string.split("").reverse().join("") === string;  
    
    /* split("") - se o valor for vazio, o split separa todas as letras 

    reverse() - quando temos um split, a string automaticamente retorna um array com todos os caracteres, 
    por isso podemos usar o reverse para colocar a palavra ao contrário 

    join() - é para juntar todos os elementos do array 

    o último passo é para ver se a string invertida é igual a string declarada */
}

//solução 2

function verificarPalindromo2(string) {
    if(!string) return 'string inexistente';

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) { //  
            return false;
        } 
    }

    return true;
    
    /* inicializa o índice em 0

    checar se o índice é menor que o comprimento da string

    como em cada um desses loops vai estar verificando 2 caracteres, então é preciso percorrer apenas metade da string (por isso divide por 2)

    se for, vai incrementar 1 no índice, 
    (se continuar sendo menor, vai continuar incrementando 1 no loop até esse for ser false) */
}

console.log(verificarPalindromo2("abba"));