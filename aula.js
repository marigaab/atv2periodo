let x = 10;
let y = 20;
let z = 20;
console.log(x+y); // console é o printf do c
console.log(x==y); // comparaçao
console.log (x!==y); // diferente
console.log (x * y * z ); // multiplicaçao 
console.log ( x * z * ( z - 20)); 

let nome = "marcos";
let nome2 = "henrique";

console.log ( nome + " " + nome2);// para add espaço entre os nomes

nome = "Gustavo"
let idade = 29;
let endereco = " berlamino de morais";

console.log (" ola, meu nome eh: "+nome+ ", eu tenho: "+ idade + " anos e moro na rua "+ endereco);

// crase
console.log(`ola meu nome eh: ${nome} e tenho: ${idade} anos e moro na rua: ${endereco}`);

const g = 9.8; 
const  pi = 3.1415; // variavel const é inalteravel no codigo
// FUNCAO

function imprimeNome (nome, idade){
  console.log (` Meu nome é: ${nome}, e tenho ${idade}`);
}
imprimeNome("gustavo",35); // precisa chamar a funcao para aparecer o cconsole

function formataStringDadosUsuario(nome,idade){
    return ` meu nome é ${nome}, e tenho ${idade} anos`
}

console.log ( formataStringDadosUsuario(nome,18));
// ARRAY
// array uma colecao de dados com indice
let array = [];
let array1= [1,2,3,4,5];
console.log (array.length) // tamanho da array
console.log (array1);

array1.push (6) // add o elemento no final do vetor
 console.log (array1.length)

array1.pop () // remove o ultimo elemento do vetor
console.log (array1.length)
// ESTRUTURA DE REPETICAO
let pessoas = ["joao", "pedro", "maria"];
for ( let i=0; i < pessoas.length; i++ ){
    console.log (`nome${pessoas[i]}`)
}

// faça uma matriz 3x3 de numeros e imprima ela
let matriz = [[1,2,3],[4,5,6],[7,8,9]];
for ( let i=0; i < matriz.length; i++ ){
    console.log ("-") // para imprimir - entre os numeros
    for (let j =0; j < matriz[1].length; j++)
    console.log(matriz[i][j]);
}

// BLOCOS conjunto de zero ou mais declaraçoes agrupados entre chaves {}
// os blocos sao usados para agrupar varias declaraçoes em um bloco de codigo frquentemente
// usados em estruturas de controle de fluxo, como loops for, while, e condicionais, if, else
var varNome = "joana";
let letNome = "joana";
const constNome = "joana"
{
    // isso é um bloco
}
{
    var varNomeInside = "Pedro"
    let letNomeInside = "Pedro"
    const constNomeInside = "Pedro"

}
console.log(varNomeInside) // var fica como variavel global aparece em todo o cod
console.log(letNomeInside) // so aparece dentro do bloco
console.log(constNomeInside) // so aparece dentro do bloco

   let xOut = 0;
   var yOut = 0;

function sum (a,b){
    let x = a + b;
    var y = x;
    xOut = x;
    yOut = x;
}

sum (1,1);
console.log(xOut)
console.log(yOut)
// console.log(x)
// console.log(y)

for (let i=0; i < 5; i++){
    console.log(i); // pintando todo o i
}
// console.log(i) erro
console.log ("-------------")

