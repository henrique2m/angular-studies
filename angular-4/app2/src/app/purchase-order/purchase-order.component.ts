import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-purchase-order',
    templateUrl: './purchase-order.component.html',
    styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {
    address!: string;
    number!: string;
    complement!: string;
    payment: string = 'debito';

    isValidAddress!: boolean;
    isValidNumber!: boolean;
    isValidComplement!: boolean;
    isValidPayment!: boolean;

    initialStateAddress: boolean = true;
    initialStateNumber: boolean = true;
    initialStateComplement: boolean = true;
    initialStatePayment: boolean = true;

    isValidForm: string = 'disabled';

    constructor() {}

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
}
