import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { OffersService } from '../services/offers.service';
import { Offer } from '../shared/offer.model';
import { HttpErrorResponse } from '@angular/common/http';
import {
    switchMap,
    debounceTime,
    distinctUntilChanged,
    catchError
} from 'rxjs/operators';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [OffersService]
})
export class HeaderComponent implements OnInit {
    public offers!: Observable<Offer[]>;
    public handleOffers!: Offer[];
    private subjectSearchOffers: Subject<string> = new Subject<string>();

    constructor(private offersService: OffersService) {}

    ngOnInit() {
        this.handleOffersReactiveProgramming();
    }

    search(event: Event) {
        const valueSearch = (<HTMLInputElement>event.target).value;
        console.log(valueSearch);
    }

    searchToReferenceInput(valueSearch: string) {
        this.offers = this.offersService.offersSearch(valueSearch);

        this.offers.subscribe(
            (offers: Offer[]) => console.log(offers),
            (error: any) => console.log('Error status: ', error.status),
            () => console.log('Finishing!')
        );
    }

    searchOffersReactiveProgramming(valueSearch: string) {
        this.subjectSearchOffers.next(valueSearch);
    }

    handleOffersReactiveProgramming() {
        this.offers = this.subjectSearchOffers.pipe(
            debounceTime(1000),
            distinctUntilChanged(),
            switchMap((search: string) => {
                if (search.trim() === '') return of<Offer[]>([]);

                return this.offersService.offersSearch(search);
            }),
            catchError((error: HttpErrorResponse) => {
                console.warn(error.message);
                return of<Offer[]>([]);
            })
        );

        this.offers.subscribe(
            (offers: Offer[]) => (this.handleOffers = offers)
        );
    }
}
