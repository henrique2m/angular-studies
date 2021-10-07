import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OffersService } from 'src/app/services/offers.service';

@Component({
    selector: 'app-how-to-use',
    templateUrl: './how-to-use.component.html',
    providers: [OffersService]
})
export class HowToUseComponent implements OnInit {
    howToUse!: string;

    constructor(
        private router: ActivatedRoute,
        private offersService: OffersService
    ) {}

    ngOnInit() {
        this.handleHowToUseWithParams();
    }

    private _loadingHowToUse(id: number) {
        this.offersService.getHowToUseFideById(id).then((response: string) => {
            this.howToUse = response;
        });
    }

    handleHowToUseWithSnapshot() {
        const id = this.router.parent?.snapshot.params['id'];
        this._loadingHowToUse(id);
    }

    handleHowToUseWithParams() {
        this.router.parent?.params.subscribe((params: Params) => {
            this._loadingHowToUse(params.id);
        });
    }
}
