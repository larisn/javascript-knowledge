
function somar() {
    var texto1 = document.getElementById('texto1');
    var texto2 = document.querySelector('input#texto2');
    var res = document.getElementById('res');
    var n1 = Number(texto1.value); //transformar string em num//
    var n2 = Number(texto2.value);
    var s = n1 + n2
    res.innerText = `A soma entre ${n1} e ${n2} é igual a ${s}.`;
}

