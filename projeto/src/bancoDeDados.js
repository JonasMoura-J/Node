const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

const salvarProduto = (produto) => {
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

const getProduto = (id) => {
    return produtos[id] || {}
}

const getProdutos = () => {
    return Object.values(produtos)
}

module.exports = {salvarProduto, getProduto, getProdutos}