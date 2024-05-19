// EXERCICIO 1
/*let pessoa = {
    nome: "Soraya",
    idade: 18,
    profissao: "ilusionista",    
}
 console.log(pessoa.nome);

pessoa.nome= "Coley"; // subscrever um valor
pessoa.cidade = "Curitiba";

delete pessoa.profissao; // para deletar algo
console.log (pessoa); */
// EXERCICIO 2
let celular = {
    Nome: "Smartphone XYZ",
    Preco: "999,99",
    img: "/img/caminhoparaimagem",
    descricao: "Um smartphone poderoso com câmera de alta resolução e processador rápido.",
    avaliacao: "4.5",
    disponivel: true,
    caracteristicas: {
       especificacoes: [
            "Tela de 6 polegadas", 
            "Memória interna de 128GB", 
            "Câmera principal de 48MP"
        ],
        imprimeEspecificacoes: function (){
            this.especificacoes.forEach ((especificacao)=>{
                console.log(especificacao) 
        })
    },
    
        tag: [
            "tecnologia",
             "smartphone", 
             "eletrônicos"
        ],
        imprimeTags: function (){
            this.tag.forEach ((tag)=>{
                console.log(tag) 
        })
    }
    }
}
console.log(celular.caracteristicas.imprimeEspecificacoes());
console.log(celular.caracteristicas.imprimeTags());
let celular1 = {
    Nome: "Smartphone XYZ",
    Preco: "999,99",
    img: "/img/caminhoparaimagem",
    descricao: "Um smartphone poderoso com câmera de alta resolução e processador rápido.",
    avaliacao: "4.5",
    caracteristicas: {
       especificacoes: [
            "Tela de 6 polegadas", 
            "Memória interna de 128GB", 
            "Câmera principal de 48MP"
        ],
        imprimeEspecificacoes: function (){
            this.especificacoes.forEach ((especificacao)=>{
                console.log(especificacao) 
        })
    },
    
        tag: [
            "tecnologia",
             "smartphone", 
             "eletrônicos"
        ],
        imprimeTags: function (){
            this.tag.forEach ((tag)=>{
                console.log(tag) 
        })
    }
    }
}
let celular2 = {
    Nome: "Smartphone XYZ",
    Preco: "999,99",
    img: "/img/caminhoparaimagem",
    descricao: "Um smartphone poderoso com câmera de alta resolução e processador rápido.",
    avaliacao: "4.5",
    caracteristicas: {
       especificacoes: [
            "Tela de 6 polegadas", 
            "Memória interna de 128GB", 
            "Câmera principal de 48MP"
        ],
        imprimeEspecificacoes: function (){
            this.especificacoes.forEach ((especificacao)=>{
                console.log(especificacao) 
        })
    },
    
        tag: [
            "tecnologia",
             "smartphone", 
             "eletrônicos"
        ],
        imprimeTags: function (){
            this.tag.forEach ((tag)=>{
                console.log(tag) 
        })
    }
    }
}
let celular3 = {
    Nome: "Smartphone XYZ",
    Preco: "999,99",
    img: "/img/caminhoparaimagem",
    descricao: "Um smartphone poderoso com câmera de alta resolução e processador rápido.",
    avaliacao: "4.5",
    disponivel: true,
    caracteristicas: {
       especificacoes: [
            "Tela de 6 polegadas", 
            "Memória interna de 128GB", 
            "Câmera principal de 48MP"
        ],
        imprimeEspecificacoes: function (){
            this.especificacoes.forEach ((especificacao)=>{
                console.log(especificacao) 
        })
    },
    
        tag: [
            "tecnologia",
             "smartphone", 
             "eletrônicos"
        ],
        imprimeTags: function (){
            this.tag.forEach ((tag)=>{
                console.log(tag) 
        })
    }
    }
}
let celular4 = {
    Nome: "Smartphone XYZ",
    Preco: "999,99",
    img: "/img/caminhoparaimagem",
    descricao: "Um smartphone poderoso com câmera de alta resolução e processador rápido.",
    avaliacao: "4.5",
    disponivel: false,
    caracteristicas: {
       especificacoes: [
            "Tela de 6 polegadas", 
            "Memória interna de 128GB", 
            "Câmera principal de 48MP"
        ],
        imprimeEspecificacoes: function (){
            this.especificacoes.forEach ((especificacao)=>{
                console.log(especificacao) 
        })
    },
    
        tag: [
            "tecnologia",
             "smartphone", 
             "eletrônicos"
        ],
        imprimeTags: function (){
            this.tag.forEach ((tag)=>{
                console.log(tag) 
        })
    }
    }
}

let arrayListaDeProdutos = ["celular","celular1","celular2","celular3","celular4"];
console.log (arrayListaDeProdutos);
for ( let i=0; i < arrayListaDeProdutos; i++){
    console.log(` produto${arrayListaDeProdutos[i]}`);
}
