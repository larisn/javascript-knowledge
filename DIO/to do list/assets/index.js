var botaoAdicionar = document.getElementById('botaoAdicionar');
var tarefa = document.getElementById('tarefa');
var option1 = document.getElementById('op1');

botaoAdicionar.addEventListener('click', clicar);

function clicar() {
    option1.style.display = 'block';
}