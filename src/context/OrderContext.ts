import { createContext } from "react";

export type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export type CarState = {
  products: Product[];
  total: number;

}

type OrderContextType = {
  cart: CarState;
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  checkout: () => void;
};

const orderContext = createContext<OrderContextType | undefined>(undefined);
export default orderContext;