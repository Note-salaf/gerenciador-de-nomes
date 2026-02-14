
export function salvarNomes(lista) {
    localStorage.setItem('nomes', JSON.stringify(lista))
}

export function excluirElementoDoArmazenamentoLocal(nome) {
    const nomesSalvos = JSON.parse(localStorage.getItem("nomes")) || [];

    const novaLista = nomesSalvos.filter(elemento => elemento !== nome);

    localStorage.setItem("nomes", JSON.stringify(novaLista));
}

export function excluirLista(lista) {
    lista.length = 0; // limpa a array

    localStorage.removeItem("nomes"); // remove só essa chave
}