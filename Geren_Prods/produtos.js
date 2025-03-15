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

const precosProd2 = produtos.map(produto2 => `R$ ${produto2.preço.toFixed(2)}`);

const nomeProd = produtos.map(produto => produto.nome);

const precosProd = produtos.map(produto => Number(produto.preço));

const prodEstoque = produtos.map(stoque => Number(stoque.Estoque));

const levaTudo = (precosProd, prodEstoque) => {
    let soma = 0;
    for (let i = 0; i < precosProd.length; i++) {
        soma += precosProd[i] * prodEstoque[i];
    }
    return soma;
};

const levaCada = (precosProd, prodEstoque, nomeProd) => {
    let tudoCada = [];
    let compCada = [];
    for (let i = 0; i < precosProd.length; i++) {
        tudoCada[i] = precosProd[i] * prodEstoque[i];
        compCada[i] = nomeProd[i] + ": R$" + tudoCada[i];
    }
    return compCada;
};

const precosFilt = produtos.filter(produtofil => {

    if (produtofil.preço > 10 ) {
        return true;
    } else {
            return false;
        }
});

const prodTot = produtos.reduce((total,produto) => total + produto.Estoque, 0);

export {
    produtos,
    gerarLinha,
    precosProd2,
    precosFilt,
    levaTudo,
    prodEstoque,
    precosProd,
    prodTot,
    levaCada,
    nomeProd
}
