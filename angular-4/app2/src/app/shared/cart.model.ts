type Images = { url: string };

export interface ItemCart {
    id: number;
    title: string;
    description: string;
    image: Images;
    price: number;
    amount: number;
}
