import { Component, OnInit, ViewChild } from '@angular/core';
import { Demand } from '../shared/purchaseOrder.model';
import { PurchaseOrderService } from '../services/purchase-order.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'app-purchase-order-reactive-module',
    templateUrl: './purchase-order-form-reactive.component.html',
    styleUrls: ['./purchase-order.component.css'],
    providers: [PurchaseOrderService]
})
export class PurchaseOrderFormReactiveModuleComponent implements OnInit {
    idProduct!: number | undefined;

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

    constructor(private purchaseOrderService: PurchaseOrderService) {}

    @ViewChild('productForm') productForm!: NgForm;

    ngOnInit(): void {
        console.log('Not empty');
    }

    handleCheckout() {
        console.log(this.formProduct);

        return;
        const demand: Demand = this.productForm.value;

        this.purchaseOrderService.checkout(demand).subscribe({
            next: (demand: Demand) => {
                this.idProduct = demand.id;
            },
            error: (e) => {
                console.log(e);
            }
        });
    }
}
