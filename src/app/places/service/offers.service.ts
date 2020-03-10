import { Offer } from './../model/offer.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  private _offers: Offer[] = [
    new Offer(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
      149.99
    ),
    new Offer(
      'p2',
      "L'Amour Toujours",
      'A romantic place in Paris!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/1024px-Paris_Night.jpg',
      189.99
    ),
    new Offer(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://upload.wikimedia.org/wikipedia/commons/0/01/San_Francisco_with_two_bridges_and_the_fog.jpg',
      99.99
    ),
    new Offer(
      'p4',
      'Germany',
      'Germany is a nice country to visit!',
      'https://images.law.com/contrib/content/uploads/sites/378/2020/01/Frankfurt-skyline-Article-202001241710.jpg',
      199.99
    ),
    new Offer(
      'p5',
      'France',
      'France is a nice country to visit!',
      'https://static.coindesk.com/wp-content/uploads/2017/10/France.jpg',
      299.99
    ),
    new Offer(
      'p6',
      'Italy',
      'Italy is a nice country to visit!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT10AG6cu1JEzHrja8huho-Jz6XJHUTPvQOoRJ64BLhcW0DzTth',
      399.99
    )
  ];
  get offers() {
    return [...this._offers];
  }
  getOffer(id: string) {
    return { ...this._offers.find(o => o.id === id) };
  }
  constructor() {}
}
