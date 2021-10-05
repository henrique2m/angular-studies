import { Offer } from '../shared/offer.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class OffersService {
    private API_URL: string = 'http://localhost:3001';

    constructor(private httpClient: HttpClient) {}

    public Offers: Array<Offer> = [];

    public getOffers(): Array<Offer> {
        return this.Offers;
    }

    public getOffersPromise(): Promise<Offer[]> {
        const filter = '?emphasis=true';

        return this.httpClient
            .get(`${this.API_URL}/offers/${filter}`)
            .toPromise()
            .then((response: any) => response);
    }

    public getOffersForCategory(category: string) {
        const filter = `?category=${category}`;

        return this.httpClient
            .get(`${this.API_URL}/offers/${filter}`)
            .toPromise()
            .then((response: any) => response);
    }

    public getOffersFideById(id: number): Promise<Offer> {
        const filter = `?id=${id}`;

        return this.httpClient
            .get(`${this.API_URL}/offers/${filter}`)
            .toPromise()
            .then((response: any) => response[0]);
    }

    public getHowToUseFideById(id: number): Promise<string> {
        const filter = `?id=${id}`;

        return this.httpClient
            .get(`${this.API_URL}/how-to-use/${filter}`)
            .toPromise()
            .then((response: any) => response[0].description);
    }

    public getWhereIsFideById(id: number): Promise<string> {
        const filter = `?id=${id}`;

        return this.httpClient
            .get(`${this.API_URL}/where-is/${filter}`)
            .toPromise()
            .then((response: any) => response[0].description);
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

    public offersSearch(search: string): Observable<Offer[]> {
        return this.httpClient
            .get(`${this.API_URL}/offers?description_like=${search}`)
            .pipe((response: any) => response);
    }
}
