export interface CrudCartResponce {
  status: string;
  message: string;
  numOfCartItems: number;
  cartId: string;
  data: cartDetails;
}

export interface cartDetails {
  _id: string;
  cartOwner: string;
  products: Product[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCartPrice: number;
}

export interface Product {
  count: number;
  _id: string;
  product: itemInCart;
  price: number;
}

export interface itemInCart {
  subcategory: Subcategory[];
  _id: string;
  title: string;
  slug: string;
  quantity: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  id: string;
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
