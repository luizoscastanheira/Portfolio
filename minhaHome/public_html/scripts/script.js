// PRIMEIRO - Mapear cada elemento com uso de variáveis
// usando o querySelector para procurar alguem dentro do document
// no caso procurmos a classe que vamos trabalhar
const botao = document.querySelector('.botao-menu')
const menuLateral = document.querySelector('.menu-lateral')
const conteudo = document.querySelector('.conteudo')
const background = document.querySelector('.background')

// Criando um evento para observar o botão
// usamos uma arrow function para facilitar e adicionar a classe ativo aos elementos
// vamos usar .toggle no lugar .add pois o toogle verifica se há a classe ele tira, se nãi há ele adiciona
botao.addEventListener('click', () => {
    menuLateral.classList.toggle('ativo')
    botao.classList.toggle('ativo')
    conteudo.classList.toggle('ativo')
    background.classList.toggle('ativo')
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