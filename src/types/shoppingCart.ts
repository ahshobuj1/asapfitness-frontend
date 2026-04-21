import {TProduct} from './product';

export type TShoppingCartItem = {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  product: TProduct;
};

export type TCart = {
  items: TShoppingCartItem[];
  subtotal: number;
};
