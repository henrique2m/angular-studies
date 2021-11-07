import { ItemCart } from './cart.model';

export interface Demand {
    address: string;
    number: string;
    complement: string;
    payment: string;
    itemsCart: ItemCart[];
    id?: number;
}
