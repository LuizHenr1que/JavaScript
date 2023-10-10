//const comida = 'Pizza';
//const agua = 'A melhor comida';

//console.log(agua.charAt(0));

const transacao1 = 'Deposito de fornecedor';
const transacao2 = 'Taxa de camisas';

console.log(transacao1.slice(-5));

console.log(transacao2.indexOf('na'));


const preco = 'R$ 99,00';

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((item) => {
    console.log(item.padStart(10, '-'));
})
