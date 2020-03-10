import { Offer } from './../../model/offer.model';
import { OffersService } from './../../service/offers.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss']
})
export class OfferBookingsPage implements OnInit {
  loadedOffer: Offer;
  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private offersService: OffersService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('offerId')) {
        this.navCtrl.navigateBack('/places/offers');
        return;
      }
      this.loadedOffer = this.offersService.getOffer(paramMap.get('offerId'));
    });
  }
}
