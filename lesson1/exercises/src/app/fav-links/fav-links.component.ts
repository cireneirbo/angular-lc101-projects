import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.almanac.com/gardening/grow-victory-garden-coronavirus', 'http://www.catb.org/~esr/writings/cathedral-bazaar/cathedral-bazaar/index.html'];
  constructor() { }

  ngOnInit() {
  }

}
