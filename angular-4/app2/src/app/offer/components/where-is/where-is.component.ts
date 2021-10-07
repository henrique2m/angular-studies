import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from 'src/app/services/offers.service';

@Component({
    selector: 'app-where-is',
    templateUrl: './where-is.component.html',
    providers: [OffersService]
})
export class WhereIsComponent implements OnInit {
    whereIs!: string;

    constructor(
        private router: ActivatedRoute,
        private offersService: OffersService
    ) {}

    ngOnInit(): void {
        this.handleWhereIsWithParmas();
    }

    private _loadingWhereIs(id: number) {
        this.offersService.getWhereIsFideById(id).then((response: string) => {
            this.whereIs = response;
        });
    }

    handleWhereIsWithParmas() {
        this.router.parent?.params.subscribe((params) => {
            this._loadingWhereIs(params.id);
        });
    }

    handleWhereIsWithSnapshot() {
        const id = this.router.parent?.snapshot.params['id'];

        this._loadingWhereIs(id);
    }
}
