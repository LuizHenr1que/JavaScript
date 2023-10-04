/*function Dom(seletor) {
    this.element = function() {
        return document.querySelector(seletor);
    }
    this.ativar = function(classe) {
        this.element().classList.add('Ativar');
    }
}

const li = new Dom('li');
const ul = new Dom('ul');

*/
// Transforme o objeto abaixo em uma constructor function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + 'andou');
    }
}
///////////

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function() {
        console.log(nome + ' andou');
    }
}

// crie 3 pessoas, Joao - 20 anos
// maria - 25 anos, bruno - 15 anos
const joao = new Pessoa('Joao', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

//crie uma constructor function (Dom) para manipulação
//de listas de elementos do dom. deve conter as sequintes 
//propriedades e métodos:
//
//elements, retorna NodeList com os elementos selecionados 
//addClass(classe), adiciona a classe a todos os elementos 
//removeClasse(classe), remove a classe a todos os elementos
function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.add(classe);
        })
    }
    this.removeClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.remove(classe);
        })
    }
}

const listaItens = new Dom ('li')
const ul = new Dom('ul');

//listaItens.addClass('ativar');

//ul.addClass( 'ativar-ul')