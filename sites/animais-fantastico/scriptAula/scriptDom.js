// const img = document.querySelector('img');

// function callback(event) {
//     console.log(event);
// }

// img.addEventListener('click', callback);

// const animaisLista = document.querySelector('.animais-lista');

// function callbackLista(event) {

//     const target = (event.target);
    
//     console.log(target)
// }

//animaisLista.addEventListener('click', callbackLista);

// const linkExterno = document.querySelector('a[href^="http"]');

// function handleLinkExterno(event) {
//     event.preventDefault();
//     //console.log(event);
//     console.log(this.getAttribute('href'));
//     console.log(event.currentTarget);
// }

// linkExterno.addEventListener('click', handleLinkExterno);

// const h1 = document.querySelector('h1');

// function handleEvent(event) {
//     console.log(event.type, event)
// }

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);

// function handleKeyboard(event){
//     if(event.key === 'f'){
//         document.body.classList.toggle('fullscreen')
//     }
//     console.log(event.key);
// }

// window.addEventListener('keydown', handleKeyboard);



// const imgs = document.querySelectorAll('img');

// function handeImg(event) {
//     console.log(event.target.getAttribute('src'));
// }

// imgs.forEach(img => {
//     img.addEventListener('click', handeImg);
// });




















// quando o usuario clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. previna o comportamento padrao desses links 
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    });
    this.classList.add('ativo');
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink)
});

//selecione todos os elementos do site começando a partir do body
//ao clique mostre exatamente quais elementos estao sendo clicados
const TodosElementos = document.querySelectorAll('body *')

function handleElemento(event) {
    event.currentTarget.remove();
};

// TodosElementos.forEach((elemento) => {
//     elemento.addEventListener('click', handleElemento);
// });

// utilizando o codigo anterior, ao invez de mostrar no console,
// remova o elemento que esta sendo clicado, o metodo remove() remove um elemento




// se o usuario clicar na tecla (t), aumente todo o texto do site

function handleClickT(event) {
    if(event.key == 't') {
        document.documentElement.classList.toggle('textomaior');
    }
}

window.addEventListener('keydown', handleClickT);