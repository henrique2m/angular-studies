import { Component, OnInit, ViewChild } from '@angular/core';
import { Demand } from '../shared/purchaseOrder.model';
import { PurchaseOrderService } from '../services/purchase-order.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-purchase-order-form-module',
    templateUrl: './purchase-order-form-module.component.html',
    styleUrls: ['./purchase-order.component.css'],
    providers: [PurchaseOrderService]
})
export class PurchaseOrderFormModuleComponent implements OnInit {
    idProduct!: number | undefined;

    constructor(private purchaseOrderService: PurchaseOrderService) {}

    @ViewChild('productForm') productForm!: NgForm;

    ngOnInit(): void {
        console.log('Not empty');
    }

    handleCheckout() {
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
