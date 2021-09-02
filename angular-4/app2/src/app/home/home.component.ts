import { Component, OnInit } from '@angular/core';
import { OffersService } from '../services/offers.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OffersService],
})
export class HomeComponent implements OnInit {

  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    console.log(this.offersService.getOffers())
  }
}
