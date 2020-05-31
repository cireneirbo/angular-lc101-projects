import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'skill-set',
   templateUrl: './skill-set.component.html',
   styleUrls: ['./skill-set.component.css']
})
export class SkillSetComponent implements OnInit {
   listHeading: string = 'Some Coding Skills I Know';
   skills: string[] = ['Loops', 'Conditionals', 'Functions', 'Classes', 'Modules', 'Git', 'HTML/CSS'];
   alternateColor: string = 'black';
   bulletType: string = 'A';
   changeColor: boolean = true;
   backgroundImage: string = 'url(http://wallpapersdsc.net/wp-content/uploads/2016/09/Pamukkale-High-Definition.jpg)';

   constructor() { }

   ngOnInit() { }

}
