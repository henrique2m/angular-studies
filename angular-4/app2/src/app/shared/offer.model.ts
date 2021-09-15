type Images = { url: string };

export interface Offer {
    id: number;
    category: string;
    title: string;
    description: string;
    advertiser: string;
    price: number;
    emphasis: boolean;
    images: Images[];
}
