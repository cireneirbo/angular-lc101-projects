import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
  title = 'Crush your enemies, see them driven before you, and hear the lamentation of the women.';
  constructor() { }

  ngOnInit() {
  }

}
