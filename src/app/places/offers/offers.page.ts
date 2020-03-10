import { OffersService } from './../service/offers.service';
import { Offer } from './../model/offer.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  loadedOffers: Offer[];
  constructor(private offersService: OffersService) {}

  ngOnInit() {
    this.loadedOffers = this.offersService.offers;
  }
}
