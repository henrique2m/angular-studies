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
        private route: ActivatedRoute,
        private offersService: OffersService
    ) {}

    ngOnInit(): void {
        this.handleWhereIs();
    }

    loadingWhereIs(id: number) {
        this.offersService.getWhereIsFideById(id).then((response: string) => {
            this.whereIs = response;
        });
    }

    handleWhereIs() {
        this.route.parent?.params.subscribe((params) => {
            this.loadingWhereIs(params.id);
        });
    }
}
