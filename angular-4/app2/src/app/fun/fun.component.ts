import { Component, OnInit } from '@angular/core';
import { OffersService } from '../services/offers.service';
import { Offer } from '../shared/offer.model';

@Component({
    selector: 'app-fun',
    templateUrl: './fun.component.html',
    styleUrls: ['./fun.component.css'],
    providers: [OffersService]
})
export class FunComponent implements OnInit {
    offers!: Offer[];

    constructor(private offerService: OffersService) {}

    ngOnInit(): void {
        this.offerService
            .getOffersForCategory('diversao')
            .then((offers: Offer[]) => {
                this.offers = offers;
            });
    }
}
