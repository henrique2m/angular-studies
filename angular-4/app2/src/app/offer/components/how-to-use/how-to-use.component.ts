import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
        this.handleHowToUse();
    }

    loadingHowToUse(id: number) {
        this.offersService.getHowToUseFideById(id).then((response: string) => {
            this.howToUse = response;
        });
    }

    handleHowToUse() {
        const id = this.router.parent?.snapshot.params['id'];
        this.loadingHowToUse(id);
    }
}
