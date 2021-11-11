import { Component, OnInit } from '@angular/core';
import { Demand } from '../shared/purchaseOrder.model';
import { PurchaseOrderService } from '../services/purchase-order.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../services/cart.service';

import { ItemCart } from '../shared/cart.model';

@Component({
    selector: 'app-purchase-order-reactive-module',
    templateUrl: './purchase-order-form-reactive.component.html',
    styleUrls: ['./purchase-order.component.css'],
    providers: [PurchaseOrderService]
})
export class PurchaseOrderFormReactiveModuleComponent implements OnInit {
    idProduct!: number | undefined;
    itemsCart: ItemCart[] = [];
    sumPriceTotal: number = 0;

    formProduct: FormGroup = new FormGroup({
        address: new FormControl(null, [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(120)
        ]),
        number: new FormControl(null, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(20)
        ]),
        complement: new FormControl(null),
        payment: new FormControl(null, [Validators.required])
    });

    constructor(
        private purchaseOrderService: PurchaseOrderService,
        private cartService: CartService
    ) {}

    ngOnInit(): void {
        this.handleItemsCart();
    }

    handleItemsCart() {
        this.itemsCart = this.cartService.getItemsCart();
        this.handleSumPriceTotal();
    }

    handleCheckout() {
        const demand: Demand = this.formProduct.value;
        demand.itemsCart = this.itemsCart;

        this.purchaseOrderService.checkout(demand).subscribe({
            next: (demand: Demand) => {
                this.idProduct = demand.id;
                this.cartService.clearCart();
            },
            error: (e) => {
                console.log(e);
            }
        });
    }

    handleIncreasedItemAmount(itemCart: ItemCart) {
        this.cartService.increasedItemAmount(itemCart);
        this.handleSumPriceTotal();
    }

    handleDecreasedItemAmount(itemCart: ItemCart) {
        this.cartService.decreasedItemAmount(itemCart);
        this.handleSumPriceTotal();
    }

    handleSumPriceTotal() {
        this.sumPriceTotal = this.cartService.sumPriceTotal();
    }
}
