import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { OffersService } from '../services/offers.service';
import { Offer } from '../shared/offer.model';

import { interval, Observable, Observer, Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-offer',
    templateUrl: './offer.component.html',
    styleUrls: ['./offer.component.css'],
    providers: [OffersService]
})
export class OfferComponent implements OnInit, OnDestroy {
    private timeObservableSubscription!: Subscription;
    private createObservableSubscription!: Subscription;
    private handlingErrorObservableSubscription!: Subscription;
    private endingObservableSubscription!: Subscription;

    offer!: Offer;

    constructor(
        private route: ActivatedRoute,
        private offersService: OffersService,
        private cartService: CartService
    ) {}

    ngOnInit(): void {
        this.retrieveParameterRouteWithParams();
        this.conceptionsObservable();
        this.createObservable();
        this.handlingErrorObservable();
        this.endingObservable();
    }

    private _getOffersFideById(id: number) {
        this.offersService.getOffersFideById(id).then((offer: Offer) => {
            this.offer = offer;
        });
    }

    retrieveParameterRouteWithParams() {
        this.route.params.subscribe((params: Params) => {
            this._getOffersFideById(params.id);
        });
    }

    retrieveParameterRouteWithSnapshot() {
        const id = this.route.snapshot.params['id'];

        this._getOffersFideById(id);
    }

    retrieveParameterRouteWithSubscribe() {
        return this.route.params.subscribe((parametro: any) => {
            console.log(parametro.id);
        });
    }

    conceptionsObservable() {
        let time = interval(2000);

        this.timeObservableSubscription = time.subscribe((interval: number) => {
            console.log(interval);
        });
    }

    createObservable() {
        let numberObservable = new Observable((observer: Observer<number>) => {
            observer.next(1);
            observer.next(3);
        });

        this.createObservableSubscription = numberObservable.subscribe(
            (result: number) => console.log(result + 10)
        );
    }

    handlingErrorObservable() {
        let numberObservable = new Observable((observer: Observer<number>) => {
            observer.next(1);
            observer.error('this is an Error!');
            observer.next(2);
        });

        this.handlingErrorObservableSubscription = numberObservable.subscribe(
            (result: number) => console.log(result + 10),
            (erro: string) => console.log(erro)
        );
    }

    endingObservable() {
        let numberObservable = new Observable((observer: Observer<number>) => {
            observer.next(1);
            observer.complete();
        });

        this.endingObservableSubscription = numberObservable.subscribe(
            (result: number) => console.log(result + 10),
            (erro: string) => console.log(erro),
            () => console.log('Finishing Observable.')
        );
    }

    addItemCart() {
        this.cartService.addItemCart(this.offer);
    }

    ngOnDestroy() {
        this.timeObservableSubscription.unsubscribe();
        this.createObservableSubscription.unsubscribe();
        this.handlingErrorObservableSubscription.unsubscribe();
        this.endingObservableSubscription.unsubscribe();
    }
}
