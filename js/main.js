import { mostrarNome } from './ui.js';
import { adicionarNome, excluirNomeDaArray } from './state.js';
import { salvarNomes, excluirElementoDoArmazenamentoLocal, excluirLista } from './storage.js';


let nomes = []
const btnAdiciona = document.querySelector('.btnAdiciona')
const btnExclui = document.querySelector('.btnExclui')
const btnExcluiTodos = document.querySelector('.btnExcluiTodos')



btnAdiciona.addEventListener('click', () => {
    const inputEntrada = document.querySelector('.inputEntrada')
    const texto = inputEntrada.value

    if (!texto) return;

    mostrarNome(texto)
    adicionarNome(nomes, texto)
    salvarNomes(nomes)

    inputEntrada.value = ''
})


btnExclui.addEventListener('click', () => {
    const select = document.querySelector('#selectNomes');
    const nomeSelecionado = select.value;
    nomes = excluirNomeDaArray(nomes, nomeSelecionado)
    select.remove(select.selectedIndex);
    excluirElementoDoArmazenamentoLocal(nomeSelecionado)


})

btnExcluiTodos.addEventListener('click', () => {
    excluirLista(nomes)
    const select = document.querySelector('#selectNomes');

    select.length = 1;
    select.selectedIndex = 0;
})
