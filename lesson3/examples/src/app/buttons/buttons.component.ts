import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactiveGold: boolean = false;
   inactiveSilver: boolean = false;
   inactiveCopper: boolean = false;

   constructor() { }

   ngOnInit() { }

   resetInactiveButtons () {
      if ((this.inactiveCopper || this.inactiveGold || this.inactiveSilver) === false) {
         this.inactiveGold = true;
         this.inactiveSilver = true;
         this.inactiveCopper = true;
      } else {
         this.inactiveGold = false;
         this.inactiveSilver = false;
         this.inactiveCopper = false;
      }
      
   }

}
