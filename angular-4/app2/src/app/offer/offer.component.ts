import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OffersService } from '../services/offers.service';
import { Offer } from '../shared/offer.model';

import { interval, Observable, Observer } from 'rxjs';

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
        this.conceptionsObservable();
        this.createObservable();
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

    conceptionsObservable() {
        let time = interval(2000);

        time.subscribe((interval: number) => {
            console.log(interval);
        });
    }

    createObservable() {
        let numberObservable = new Observable((observer: Observer<number>) => {
            observer.next(1);
            observer.next(3);
        });

        numberObservable.subscribe((result: number) =>
            console.log(result + 10)
        );
    }
}
