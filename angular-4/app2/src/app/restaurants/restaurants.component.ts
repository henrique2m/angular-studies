import { Component, OnInit } from '@angular/core';
import { OffersService } from '../services/offers.service';
import { Offer } from '../shared/offer.model';

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.css'],
    providers: [OffersService]
})
export class RestaurantsComponent implements OnInit {
    offers!: Offer[];

    constructor(private offersService: OffersService) {}

    ngOnInit(): void {
        this.offersService
            .getOffersForCategory('restaurante')
            .then((offers: Offer[]) => {
                this.offers = offers;
            });
    }
}
