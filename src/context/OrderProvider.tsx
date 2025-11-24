/* eslint-disable react-refresh/only-export-components */
import React, { useContext, useState } from "react";
import OrderContext, { type CartState, type Product } from "./OrderContext";

const initialState = {
  products: [],
  total: 0,
};

function OrderProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartState>(initialState);

  const addProduct = (product: Omit<Product, 'quantity'> ) => {
    const productInCart = cart.products.find((p) => p.id === product.id);
    if (productInCart) {
      setCart({
        ...cart,
        products: cart.products.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        ),
      });
    } else {
      setCart({
        ...cart,
        products: [...cart.products, { ...product, quantity: 1 }],
      });
    }
  };

  return (
    <OrderContext.Provider value={{ addProduct, cart }}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderProvider;

// Custom Hook; colocar em um arquivo separado.
export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("Order Context não pode ser usado fora de um provider");
  }

  return context;
}
