/*var m =1;
var g =2;
function soma (){
   
   console.log(m + g);
}
console.log (soma ());
// exemplo funcao
function declararDentroeChamarFora (){
    var x;
    x=450;
function somas (){
    var x1 = x+x
    console.log(x1)
    function subtracao(){
        console.log (x1-x)
    }
    subtracao()
}
somas()
}
declararDentroeChamarFora()
//
function nomeFuncao(parametro1, parametro2){
    return parametro1 + parametro2;
}
let a = nomeFuncao
console.log(a)
console.log(a(1,2))

// const arrowFunction
const funcaoQualQuer = (a,b) =>{
    return a+b
}
console.log(funcaoQualQuer)
console.log (funcaoQualQuer(1,1))

// faça 5 funcoes arrowfunctions 1 p soma 1 p subtracao 1 p divisao 1 p multriplicacao 
// 1 para mod (%)

const funcaosoma = (m,g) =>{
    return m+g
}
console.log(funcaosoma(5,5)) */
// OBJETOS
/*let pessoa=
{
    nome:"Gustavo",
    idade:29,
    endereco:{
        rua:"belarmino de mendonca",
        numero:1346,
        bairro: "centro",
        cidade: "foz do iguacu"
    },
    formacaoAcademica:
    {
        nomeFaculdade:"faculdade x",
        cursos:
        {
            nome:"computação",
            disciplinas:
            [
                " sofrimento 1",
                " sofrimento 2",
                " sofrimento 3",
                " sofrimento 4"
            
            ]
        }
    }
}
console.log(pessoa)
// console.log(JSON.stringify(pessoa)) 

let array1 = [1,2,3,34,43,233];

//for (let i = 0; i <= array1.length; i++) 
 //   console.log(array1[i])
 function imprimeNumero (numero){ // opcao 1
    console.log(numero)
 }
 (numero) => {
    console.log (numero) // opçao 2
 }
    array1.forEach ((imprimeNumero) => { // ele retorna item por item
     console.log(array1)
    })
console.log(array1) */

/*let listaNomes = ["jose", "Maria", "Pedro", "Rosana"]

function imprimeNomeAtual (nomeAtual, indice){
    console.log(`Nome: ${nomeAtual} esta na posicao ${indice}`)
}
listaNomes.forEach(imprimeNomeAtual)

/*(nomeAtual,indice)=>({
    console.log(`Nome:${nomeAtual} esta na posicao ${indice}`)
}) */ // ERRO
/*let salarioAnoTodo =0;
let salarioAno = [1000,1000,1000,1000,1000,1000,1000,1000]

salarioAno.forEach((salarioAtual)=>{
    salarioAnoTodo += salarioAtual
})
console.log(salarioAnoTodo) */
/*let pessoa=
{
    nome:"Gustavo",
    idade:29,
    endereco:{
        rua:"belarmino de mendonca",
        numero:1346,
        bairro: "centro",
        cidade: "foz do iguacu"
    },
    formacaoAcademica:
    {
        nomeFaculdade:"faculdade x",
        cursos:
        {
            nome:"computação",
            disciplinas:
            [
                " sofrimento 1",
                " sofrimento 2",
                " sofrimento 3",
                " sofrimento 4"
            
            ],
            imprimeDisciplinas: function (){
                this.disciplinas.forEach ((disciplina)=>{
                    console.log(disciplina)
                })
            }
        }
    }
}
console.log(pessoa.formacaoAcademica.cursos.imprimeDisciplinas())
/*pessoa.formacaoAcademica.cursos.disciplinas.forEach((disciplinas)){
    console.log(disciplinas) 
}*/ //erro 

