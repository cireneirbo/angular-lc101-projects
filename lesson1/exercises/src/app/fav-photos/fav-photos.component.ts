import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  imagesTitle = 'These are some pictures, do you see?';
  image1 = 'https://pics.onsizzle.com/welcome-to-angular-whereversioninumbersare-made-upand-stability-doesnt-matter-megenerator-3826113.png';
  image2 = 'http://2damnfunny.com/wp-content/uploads/2013/10/Conan-Is-Conan-The-Barbarian-In-Great-Photoshop-Work.jpg';
  image3 = 'http://www.quickmeme.com/img/9f/9f13fb2e44db2c62e272a370add83f3570de247e544abf7578d9a82484ccb97a.jpg';

  constructor() { }

  ngOnInit() {
  }

}