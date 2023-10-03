/*const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroh2 = document.querySelector('h2')
const h2left = primeiroh2.offsetLeft;


const h2rect = primeiroh2.getBoundingClientRect();

console.log(h2rect.top);

if(h2rect.top < 0) {
    console.log('passou do elemento')
}

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerWidth,
    window.outerHeight,
    window.pageXOffset,
);

const small = window.matchMedia('(max-width: 600px)');

if(small) {
    console.log('Usuario mobile')
}
*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// verifique a distancia da primeira imagem em relacao ao topo da pagina
const img = document.querySelector('.copy');
const imgTop = img.offsetTop;

console.log(imgTop)

// retorne a soma da largura de todas as imagens 
function somaImagens() {
    const imagens = document.querySelectorAll('img');
    let soma = 0;
    imagens.forEach((imagem) => {
        soma += imagem.offsetWidth;
    })
    console.log(soma);
};

window.onload = function() {
    somaImagens();
}


//verifique se os links da pagina possuem o minimo recomendado para telas utilizados com o dedo.
//(48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) =>{
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if(linkWidth >= 48 && linkHeight >= 48) {
        console.log(link, 'Possui acessibilidade')
    } else {
        console.log(link, 'Não possui boa acessibilidade')
    }
});

//se o browser for menor que 720px
//adicione a classe menu-mobele ao menu
const browserSmall = window.matchMedia('(max-width:720px)').matches;

if(browserSmall) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile')
}
