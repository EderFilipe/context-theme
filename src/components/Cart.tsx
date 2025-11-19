const carrinho = {
  produtos: [
    {id: 1, nome: 'Produto 1', preco: 10.0, quantidade: 1}
  ],
  total: 0,
};

function Cart() {
  return (
    <div>
      <h2>Carrinho</h2>
      <ul>
        {carrinho.produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome}
            {' '}
            -$
            {produto.preco}
            {' '}
            (Quantidade:
            {' '}
            {produto.quantidade}
            )
            <button onClick={ () => {} }>Remover</button>
          </li>
        ))}
      </ul>
      <p>
        Total: R$
        {carrinho.total}
      </p>
    </div>
  )
}

export default Cart