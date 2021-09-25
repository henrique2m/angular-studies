import { Offer } from '../shared/offer.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OffersService {
    API_URI: string = 'http://localhost:3001';

    constructor(private httpClient: HttpClient) {}

    public Offers: Array<Offer> = [];

    public getOffers(): Array<Offer> {
        return this.Offers;
    }

    public getOffersPromise(): Promise<Offer[]> {
        const filter = '?emphasis=true';

        return this.httpClient
            .get(`${this.API_URI}/offers/${filter}`)
            .toPromise()
            .then((response: any) => response);
    }

    public getOffersForCategory(category: string) {
        const filter = `?category=${category}`;

        return this.httpClient
            .get(`${this.API_URI}/offers/${filter}`)
            .toPromise()
            .then((response: any) => response);
    }

    public getOffersFideById(id: number): Promise<Offer> {
        const filter = `?id=${id}`;

        return this.httpClient
            .get(`${this.API_URI}/offers/${filter}`)
            .toPromise()
            .then((response: any) => response[0]);
    }

    public getOffersPromiseFake(): Promise<Offer[]> {
        return new Promise((resolve, reject) => {
            const status = true;

            if (status) {
                setTimeout(() => resolve(this.Offers), 3000);
            } else {
                reject({ error: 404, message: 'Server not found.' });
            }
            resolve(this.Offers);
        });
    }
}
