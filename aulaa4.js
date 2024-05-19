// typeof // tipo de dado que ele recebe
// typeof x 
// 'number'
// x = 'pedro'
// 'pedro'
// typeof x 
// 'string'
// let x = 'si';
// if ( typeof x === string ){
//     console.log ("é uma string");
// }
// Array.isArray(x)
// true
// Array.isArray(y)
// false
// console.error("a")
// let x = [10,20,30,40,50]

// if (!Array.isArray(x)) {
//     console.error ("tem que ser um array")
// }
// let n =10
// if (typeof n !== 'number' ) {
//     console.log("not a number");
// }
// Number.isInteger (10)
// true
// Number.isInteger(10.2)
// false
// let p = 10.5
// p
// 10.5

function Pessoa (nome, cpf, idade) {
    this.nome = nome;
    this.cpf = cpf;
    this.idade = idade;
}
let pessoa1 = new Pessoa ("crebson", "232.432.232.32", 39);
let pessoa2 = new Pessoa ("brebson", "254.532.232.32", 38);
let pessoa3 = new Pessoa ("lrebson", "894.532.232.32", 37);

localStorage.setItem ("local-pessoa1",JSON.stringify (pessoa1))
localStorage.setItem ("local-pessoa2",JSON.stringify (pessoa2))
localStorage.setItem ("local-pessoa3", JSON.stringify (pessoa3))

let pessoaNova1 = localStorage.getItem ("local-pessoa1")
let pessoaNova2 = localStorage.getItem ("local-pessoa2")
let pessoaNova3 = localStorage.getItem ("local-pessoa3")

console.log (JSON.parse(pessoa1))
console.log (JSON.parse(pessoa2))
console.log (JSON.parse(pessoa3))




