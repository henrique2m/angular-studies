import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-purchase-order-success',
    templateUrl: './purchase-order-success.component.html'
})
export class PurchaseOrderSuccessComponent implements OnInit {
    @Input() idProduct!: number;

    constructor() {}

    ngOnInit(): void {
        console.log('Success!');
    }
}
