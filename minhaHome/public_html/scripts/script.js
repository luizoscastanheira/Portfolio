// PRIMEIRO - Mapear cada elemento com uso de variáveis
// usando o querySelector para procurar alguem dentro do document
// no caso procurmos a classe que vamos trabalhar
const botao = document.querySelector('.botao-menu')
const menuLateral = document.querySelector('.menu-lateral')
const conteudo = document.querySelector('.conteudo')
const background = document.querySelector('.background')

// Criando um evento para observar o botão
// usamos uma arrow function para facilitar e adicionar a classe ativo aos elementos
botao.addEventListener('click', () => {
    menuLateral.classList.add('ativo')
    botao.classList.add('ativo')
    conteudo.classList.add('ativo')
    background.classList.add('ativo')
    document.body.style.backgroundColor = menuLateral.classList.contains('ativo') ? '#34495e' : '#ecf0f1'
})

// removendo as classes ativo
background.addEventListener('click', () => {
    menuLateral.classList.remove('ativo')
    botao.classList.remove('ativo')
    conteudo.classList.remove('ativo')
    background.classList.remove('ativo')
    document.body.style.backgroundColor = '#ecf0f1'
})