function Produto ( nome, preco, descricao, imagem, disponivel, avaliacao, caracteristicas, tags, porcentagemDesconto)
{
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
    this.imagem = imagem;
    this.disponivel = disponivel;
    this.avaliacao = avaliacao;
    this.caracteristicas = caracteristicas;
    this.tags = tags;
    this.porcentagemDesconto = porcentagemDesconto;
  

this.getPrecoDesconto = function () {
    return this.preco * (this.porcentagemDesconto == 0 ? 1: this.porcentagemDesconto/100);
}
this.getPrecoFinal = function(){
    return  this.preco - this.getPrecoDesconto();
};

this.imprimePrecoComDesconto = function(){
    console.log(`R$ ${this.getPrecoFinal()} ${this.porcentagemDescontob == 0? "":"(Desconto de " + this.porcentagemDesconto + "%)"}`)
};

}
let produtos = [
    new Produto("Chocolate", 10, "barra de chocolate Nestle",
"/caminho/imagem,", true, 10, ["80g", "Nestle", "Ao leite"], ["Chocolate", "Nestle", "Ao leite"], 5),

    new Produto("Salgadinho", 13, "doritos da Elma Chips",
"/caminho/imagem,", true, 9, ["138g", "Elma Chips", "Doritos"], ["Saldadinho","Elma Chips", "Doritos"], 3),

    new Produto("Biscoito", 5, "biscoito da bauducco",
"/caminho/imagem,", true, 2, ["80g", "Bauducco", "Recheado"], ["Biscoito", "Bauducco", "Recheado"], 2),
    new Produto("Alface", 6, "alface crespa",
"/caminho/imagem,", true, 1, ["hortalicia", "crespa"], ["alface", "crespa"], 2),
    new Produto("Bolo", 32, "bolo de chocolate",
"/caminho/imagem,", true, 9, ["2kg", "chocolate", "beijinho"], ["Bolo", "Chocolate"], 8)

];
// IMPRIMIR AVALIACAO MAIOR QUE 3
for ( let i=0; i < produtos.length; i++){
   if (produtos[i].avaliacao > 3){
    console.log (produtos[i])
   }
}

      // IMPRIMIR DESCONTOS
 for (let i = 0; i < produtos.length; i++) {
    produtos[i].imprimePrecoComDesconto();
    }

    // MANIPULAÇÃO DO DOM

    function generateProductCard(produtos) {
        const container = document.createElement("div"); 
        container.id = "productContainer"; 
        document.body.appendChild(container); 
    
        for (let i = 0; i < produtos.length; i++) {
            const card = document.createElement("div");
            const productName = document.createElement("h1");
            productName.textContent = produtos[i].nome;
            card.appendChild(productName);
            card.classList.add("flex1");
            container.appendChild(card); 
        }
    }
    generateProductCard(produtos);
       
