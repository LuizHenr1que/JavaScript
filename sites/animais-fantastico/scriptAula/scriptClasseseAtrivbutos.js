/*const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');
menu.classList.toggle('azul');

if(menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul')
}


menu.className += ' vermelho '

//console.log(menu.className)

//////////////////atributos////////////////////

//const animais = document.querySelector('.animais');
//console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');
const srtImg = img.getAttribute('alt');

img.setAttribute('alt', 'É uma raposa');

const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);

console.log(srtImg);

const carro = {
  portas: 4,
  andar : function(km) {
    console.log(`andou ${km}`);
  }
}



//////////////read only vs writable///////////////////

const animais = document.querySelector('.animais');
*/


// adicione a classe ativa a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
  item.classList.add('ativo')
});

// remove a class ativo de todos os itens do menu e mantenha apenas o primeiro
const removeItens = document.querySelectorAll('.menu a');

removeItens.forEach((item) => {
  item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');

//verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
console.log(imgs);

imgs.forEach((img) => {
  const possuiAtrivuto = img.hasAttribute('alt')
  console.log(img, possuiAtrivuto)
})

//modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');

link.setAttribute('href' , 'https://www.google.com/');

console.log(link)

