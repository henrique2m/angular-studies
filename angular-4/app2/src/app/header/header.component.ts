import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OffersService } from '../services/offers.service';
import { Offer } from '../shared/offer.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [OffersService]
})
export class HeaderComponent {
    public ofertas!: Observable<Offer[]>;

    constructor(private offersService: OffersService) {}

    search(event: Event) {
        const valueSearch = (<HTMLInputElement>event.target).value;
        console.log(valueSearch);
    }

    searchToReferenceInput(valueSearch: string) {
        this.ofertas = this.offersService.offersSearch(valueSearch);

        this.ofertas.subscribe(
            (offers: Offer[]) => console.log(offers),
            (error: any) => console.log('Error status: ', error.status),
            () => console.log('Finishing!')
        );
    }
}
