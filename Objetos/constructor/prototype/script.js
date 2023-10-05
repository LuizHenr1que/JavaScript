function Pessoa(nome, sobrenome, idade) {
    this.nome = nome; 
    this.sobrenome = sobrenome
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
    return`${this.nome} ${this.sobrenome}`
}

Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLAllCollection.prototype)
Object.getOwnPropertyNames(document.prototype)



const luiz = new Pessoa('Luiz', 'Henrique', 22);

//////

const li = document.querySelectorAll('li');

li; //HTMLLIElement
li.click; //function
li.innerText; //string
li.value; //number
li.hidden; //boolean
li.offsetLeft; //number
li.click(); //undefined


li.hidden.constructor.name; //string
