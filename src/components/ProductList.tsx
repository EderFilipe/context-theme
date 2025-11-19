import { IoIosAddCircle } from "react-icons/io"
import { products } from "../data/produtos";
import './ProductList.css';

function ProductList() {
  return (
    <div className="product__list">
      <h2>Produtos</h2>
      <ul>
        {products.map((produto) => (
          <li key={produto.id}>
            {produto.nome}
            {' '}
            - R$
            {produto.preco}
            <button onClick={ () => {} }>
              <IoIosAddCircle size={ 20 } />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList;