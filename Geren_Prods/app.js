import {produtos, gerarLinha, PrecosProd2, PrecosFilt, levaTudo, prodEstoque, PrecosProd, ProdTot } from './produtos.js';

console.log("PRODUTOS");

console.log(produtos);

console.log(gerarLinha(60));

console.log("PREÇOS"); 

console.log(PrecosProd2);

console.log(gerarLinha(60));

console.log("ACIMA DE 10 REAIS:"); 

console.log(PrecosFilt);

console.log(gerarLinha(60));

console.log("Total de produtos no estoque: ", ProdTot);

console.log(gerarLinha(60));

console.log("Valor total dos produtos na loja: R$",levaTudo(PrecosProd, prodEstoque));






