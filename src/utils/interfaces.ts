export interface Book {
    id: string;
    name: string;
    authors: string[];
    description: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
}

export interface BookInCart {
    id: string;
    name: string;
    authors: string[];
    description: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    quantity: number;
    deliveryStatus: string;
}