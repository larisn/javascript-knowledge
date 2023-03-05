var idade = 16
console.log(`Você tem ${idade} anos.`)
if(idade < 16) {
    console.log('Não vota');
} else {                    // sem else if //
    if (idade < 18 || idade > 65) {
        console.log('Voto opcional.');
    }
}

var idade = 16
console.log(`Você tem ${idade} anos.`)
if(idade < 16) {
    console.log('Não vota');
} else if (idade < 18 || idade > 65) {  
    console.log('Voto opcional.');
} else {                    // com else if //
    console.log('Voto obrigatório.');
}

