/* const carrinho = {
  produtos: [
    {id: 1, nome: 'Produto 1', preco: 10.0, quantidade: 1}
    ],
    total: 0,
    }; */

import { useOrder } from "../context/OrderProvider";

function Cart() {
  const { cart, removeProduct } = useOrder();
  return (
    <div>
      <h2>Carrinho</h2>
      <ul>
        {cart.products.map((produto) => (
          <li key={produto.id}>
            {produto.name}
            {' '}
            -$
            {produto.price}
            {' '}
            (Quantidade:
            {' '}
            {produto.quantity}
            )
            <button onClick={ () => removeProduct(produto.id) }>Remover</button>
          </li>
        ))}
      </ul>
      <p>
        Total: R$
        {cart.total}
      </p>
    </div>
  )
}

export default Cart