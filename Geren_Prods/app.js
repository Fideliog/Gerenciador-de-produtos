import {produtos, gerarLinha, precosProd2, precosFilt, levaTudo, prodEstoque, precosProd, prodTot, levaCada, nomeProd } from './produtos.js';

console.log("Produtos");

console.log(produtos);

console.log(gerarLinha(60));

console.log("Preços"); 

console.log(precosProd2);

console.log(gerarLinha(60));

console.log("Acima de 10 reais:"); 

console.log(precosFilt);

console.log(gerarLinha(60));

console.log("Total de produtos no estoque: ", prodTot);

console.log(gerarLinha(60));

console.log("Preço total do estoque de cada produto:"); 

console.log(levaCada(precosProd, prodEstoque, nomeProd));

console.log("Valor total dos produtos na loja: R$",levaTudo(precosProd, prodEstoque));
