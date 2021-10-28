import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from 'src/app/services/purchase-order.service';
import { Demand } from 'src/app/shared/purchaseOrder.model';

@Component({
    selector: 'app-purchase-order-binding',
    templateUrl: './purchase-order-binding.component.html',
    styleUrls: ['../purchase-order.component.css'],
    providers: [PurchaseOrderService]
})
export class PurchaseOrderBindingComponent implements OnInit {
    address!: string;
    number!: string;
    complement!: string;
    payment: string = 'debito';
    idProduct!: number | undefined;

    isValidAddress!: boolean;
    isValidNumber!: boolean;
    isValidComplement!: boolean;
    isValidPayment!: boolean;

    initialStateAddress: boolean = true;
    initialStateNumber: boolean = true;
    initialStateComplement: boolean = true;
    initialStatePayment: boolean = true;

    isValidForm: string = 'disabled';

    constructor(private purchaseOrderService: PurchaseOrderService) {}

    ngOnInit(): void {
        console.log('Not empty');
    }

    handleAddress(address: string) {
        this.address = address;
        this.initialStateAddress = false;

        if (address.length > 3) {
            this.isValidAddress = true;
            this.verifyIsValidForm();
            return;
        }

        this.isValidAddress = false;
    }

    handleNumber(number: string) {
        this.number = number;
        this.initialStateNumber = false;

        if (Number(number)) {
            this.isValidNumber = true;
            this.verifyIsValidForm();
            return;
        }

        this.isValidNumber = false;
    }

    handleComplement(complement: string) {
        this.complement = complement;
        this.initialStateComplement = false;
        this.isValidComplement = true;
    }

    handlePayment(payment: string) {
        this.payment = payment;
        this.initialStatePayment = false;

        if (payment === 'debito' || payment === 'dinheiro') {
            this.isValidPayment = true;
            this.verifyIsValidForm();
            return;
        }

        this.isValidPayment = false;
    }

    verifyIsValidForm() {
        const isValidForm =
            this.isValidAddress &&
            this.isValidNumber &&
            this.isValidComplement &&
            this.isValidPayment;

        if (isValidForm) {
            this.isValidForm = '';
            return;
        }

        this.isValidForm = 'disabled';
    }

    handleCheckout() {
        const { address, number, complement, payment } = this;

        const demand: Demand = {
            address,
            number,
            complement,
            payment
        };

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
