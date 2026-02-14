

export function adicionarNome(lista, texto) {
    lista.push(texto);
}

export function excluirNomeDaArray(lista, nome) {
    return lista.filter(elemento => elemento !== nome);
}
