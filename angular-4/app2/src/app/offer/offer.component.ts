import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from '../services/offers.service';
import { Offer } from '../shared/offer.model';

@Component({
    selector: 'app-offer',
    templateUrl: './offer.component.html',
    styleUrls: ['./offer.component.css'],
    providers: [OffersService]
})
export class OfferComponent implements OnInit {
    offer!: Offer;

    constructor(
        private route: ActivatedRoute,
        private offersService: OffersService
    ) {}

    ngOnInit(): void {
        this.retrieveParameterRouteWithSnapshot();
    }

    retrieveParameterRouteWithSnapshot() {
        const id = this.route.snapshot.params['id'];

        this.offersService.getOffersFideById(id).then((offer: Offer) => {
            this.offer = offer;
        });
    }

    retrieveParameterRouteWithSubscribe() {
        return this.route.params.subscribe((parametro: any) => {
            console.log(parametro.id);
        });
    }
}
