import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demand } from '../shared/purchaseOrder.model';

@Injectable()
export class PurchaseOrderService {
    private API_URL: string = 'http://localhost:3001';

    constructor(private httpClient: HttpClient) {}

    checkout(demand: Demand): Observable<Demand> {
        return this.httpClient.post<Demand>(`${this.API_URL}/demand`, demand);
    }
}
