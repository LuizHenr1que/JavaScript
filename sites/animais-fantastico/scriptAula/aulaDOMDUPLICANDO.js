// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-descricao');
// console.log(h1.innerHTML);
// console.log(h1.outerHTML);

// h1.innerHTML = '<p>Novo titulo</p>';
//console.log(animaisLista.innerHTML);

// const lista = document.querySelector('.animais-lista');

// console.log(lista.children[--lista.children.length]);
// console.log(lista.querySelector('li:last-child'));

// console.log(lista.childNodes)

// const animais = document.querySelector('.animais')
// const contato = document.querySelector('.contato');
// const titulo = document.querySelector('.titulo');

// const mapa = document.querySelector('.mapa')


// contato.removeChild(titulo)

// contato.insertBefore(animais, mapa);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//  duplique o menu e adicione ele em copy  
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu)

//selecione o primeiro dt da dl de faq
const faq = document.querySelector('.faq');
const primeiroDt = document.querySelector('dt')

// selecione o dd referente ao primeiro dt
const proximoDD = primeiroDt.nextElementSibling;

console.log(proximoDD.remove())

//substitua o conteudo html de /faq pelo de .animais
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;
