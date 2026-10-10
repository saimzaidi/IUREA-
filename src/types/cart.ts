import { Product, ProductColor } from '../data/products';

export interface CartItem {
  id: string; // unique item line key
  product: Product;
  size: string;
  color: ProductColor;
  quantity: number;
}
