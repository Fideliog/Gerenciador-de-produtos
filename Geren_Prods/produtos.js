const produtos = [
    {"nome": "leite", "preço": 6.99, "Estoque": 23},
    {"nome": "coca", "preço": 8.50, "Estoque": 43},
    {"nome": "doritos", "preço": 10.90, "Estoque": 65},
    {"nome": "bife", "preço": 39.99, "Estoque": 12},
    {"nome": "queijo", "preço": 32.50, "Estoque": 18},
    {"nome": "arroz", "preço": 23.90, "Estoque": 40},
    {"nome": "feijão", "preço": 8.99, "Estoque": 30},
    {"nome": "chocolate", "preço": 6.50, "Estoque": 20},
];

const gerarLinha = (tamanho) => {
    let linha = '';
    for(let i=0; i<tamanho; i++){
        linha+='-'
    }
    return linha;
}

const PrecosProd2 = produtos.map(produto2 => `R$ ${produto2.preço.toFixed(2)}`);

const PrecosProd = produtos.map(produto => Number(produto.preço));

const prodEstoque = produtos.map(stoque => Number(stoque.Estoque));

const levaTudo = (PrecosProd, prodEstoque) => {
    let soma = 0;
    for (let i = 0; i < PrecosProd.length; i++) {
        soma += PrecosProd[i] * prodEstoque[i];
    }
    return soma;
};

const PrecosFilt = produtos.filter(produtofil => {

    if (produtofil.preço > 10 ) {
        return true;
    } else {
            return false;
        }
});

const ProdTot = produtos.reduce((total,produto) => total + produto.Estoque, 0);

export {
    produtos,
    gerarLinha,
    PrecosProd2,
    PrecosFilt,
    levaTudo,
    prodEstoque,
    PrecosProd,
    ProdTot
}