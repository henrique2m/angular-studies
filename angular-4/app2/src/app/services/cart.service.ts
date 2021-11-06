import { ItemCart } from '../shared/cart.model';
import { Offer } from '../shared/offer.model';

export class CartService {
    private itemsCart: ItemCart[] = [];

    constructor() {}

    addItemCart(offer: Offer) {
        const newItemCart: ItemCart = {
            id: offer.id,
            title: offer.title,
            description: offer.description,
            image: offer.images[0],
            price: offer.price,
            amount: 1
        };

        const existItem = this.itemsCart.findIndex(
            (itemCart) => itemCart.id === newItemCart.id
        );

        if (existItem >= 0) {
            this.itemsCart[existItem].amount += 1;
        } else {
            this.itemsCart.push(newItemCart);
        }
    }

    getItemsCart(): ItemCart[] {
        return this.itemsCart;
    }

    sumPriceTotal(): number {
        return this.itemsCart.reduce(
            (sum, item) => sum + item.price * item.amount,
            0
        );
    }

    increasedItemAmount(itemCart: ItemCart) {
        const existItem = this.itemsCart.find(
            (itemCart) => itemCart.id === itemCart.id
        );

        if (!existItem) return;

        existItem.amount += 1;
    }
}
