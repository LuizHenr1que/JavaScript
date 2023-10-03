//titulosArray.forEach(function(item, index, array) {
    //console.log(item, index, array);
//});


//const imgs = document.querySelectorAll('img');

//let i = 0;
//imgs.forEach((item) => {
//    console.log(i++);
//});


//let i = 0;
//imgs.forEach((item) => {
 //  console.log(i++);
//});
//versao curta
//imgs.forEach((item) => console.log(i++));



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p')
console.log(paragrafos);

paragrafos.forEach((item) => {
  console.log(item.innerText)
})
// Mostre o texto dos parágrafos no console

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => 
  console.log(i++)
);

imgs.forEach(() => console.log(i++));

