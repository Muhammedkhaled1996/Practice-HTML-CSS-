// order cash interface
export interface cashResponce {
  status: string
  message: string
  user: User
  v: Pricing
  data: orderData
}

export interface User {
  id: string
  name: string
  email: string
}

export interface Pricing {
  cartPrice: number
  taxPrice: number
  shippingPrice: number
  totalOrderPrice: number
}

export interface orderData {
  shippingAddress: ShippingAddress
  taxPrice: number
  shippingPrice: number
  totalOrderPrice: number
  paymentMethodType: string
  isPaid: boolean
  isDelivered: boolean
  _id: string
  user: User2
  cartItems: CartItem[]
  createdAt: string
  updatedAt: string
  id: number
  __v: number
}

export interface ShippingAddress {
  details: string
  phone: string
  city: string
  postalCode?: string
}

export interface User2 {
  _id: string
  name: string
  email: string
  phone: string
}

export interface CartItem {
  count: number
  _id: string
  product: Product
  price: number
}

export interface Product {
  subcategory: Subcategory[]
  ratingsQuantity: number
  _id: string
  title: string
  imageCover: string
  category: Category
  brand: Brand
  ratingsAverage: number
  id: string
}

export interface Subcategory {
  _id: string
  name: string
  slug: string
  category: string
}

export interface Category {
  _id: string
  name: string
  slug: string
  image: string
}

export interface Brand {
  _id: string
  name: string
  slug: string
  image: string
}






// get user orders interface
export type userOrdersResponce = orderDetails[]

export interface orderDetails {
  shippingAddress: ShippingAddress
  taxPrice: number
  shippingPrice: number
  totalOrderPrice: number
  paymentMethodType: string
  isPaid: boolean
  isDelivered: boolean
  _id: string
  user: User
  cartItems: CartItem[]
  createdAt: string
  updatedAt: string
  id: number
  __v: number
  paidAt?: string
}

export interface ShippingAddress {
  city: string
  details: string
  phone: string
  postalCode?: string
}

export interface User {
  _id: string
  name: string
  email: string
  phone: string
}

export interface CartItem {
  count: number
  _id: string
  product: Product
  price: number
}

export interface Product {
  subcategory: Subcategory[]
  ratingsQuantity: number
  _id: string
  title: string
  imageCover: string
  category: Category
  brand: Brand
  ratingsAverage: number
  id: string
}

export interface Subcategory {
  _id: string
  name: string
  slug: string
  category: string
}

export interface Category {
  _id: string
  name: string
  slug: string
  image: string
}

export interface Brand {
  _id: string
  name: string
  slug: string
  image: string
}
