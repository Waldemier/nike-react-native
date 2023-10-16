export interface CartItemType {
    product: ProductCartType;
    size: number;
    quantity: number;
}

export interface ProductCartType {
    id?: string;
    image: string;
    name: string;
    price: number;
}