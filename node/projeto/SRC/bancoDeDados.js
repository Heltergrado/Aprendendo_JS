const sequence = {
    _id: 1,
    get id() {return this._id++}
}
 
const produtos = {}

function salvarProduto(produto){
    if (!produto.id){ // se o id do produto não estiver setado
        produto.id = sequence.id
    }
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {} //retorna o produto pelo id ou um obj vazio
}

function getProdutos(){
    return  Object.values(produtos)
}

function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}