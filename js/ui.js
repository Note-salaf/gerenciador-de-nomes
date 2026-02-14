export function mostrarNome(texto) {
    const select = document.querySelector('#selectNomes')
    const novoNome = document.createElement('option')

    novoNome.value = texto
    novoNome.textContent = texto
    select.appendChild(novoNome)
}