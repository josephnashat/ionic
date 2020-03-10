import { OffersService } from './../../service/offers.service';
import { Offer } from './../../model/offer.model';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss']
})
export class EditOfferPage implements OnInit {
  loadedOffer: Offer;
  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private offerService: OffersService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('offerId')) {
        this.navCtrl.navigateBack('/places/offers');
        return;
      }
      this.loadedOffer = this.offerService.getOffer(paramMap.get('offerId'));
    });
  }
}
