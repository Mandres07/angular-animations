import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   animations: [
      trigger('divState', [
         state('normal', style({
            'background-color': 'red',
            'transform': 'translateX(0)'
         })),
         state('highlighted', style({
            backgroundColor: 'blue',
            transform: 'translateX(100px)'
         })),
         transition('normal <=> highlighted', animate(500))
      ]),
      trigger('wildState', [
         state('normal', style({
            'background-color': 'red',
            'transform': 'translateX(0) scale(1)'
         })),
         state('highlighted', style({
            backgroundColor: 'blue',
            transform: 'translateX(100px) scale(1)'
         })),
         state('shrunken', style({
            backgroundColor: 'green',
            transform: 'translateX(0px) scale(0.5)'
         })),
         transition('normal => highlighted', animate(300)),
         transition('highlighted => normal', animate(800)),
         transition('shrunken <=> *', [
            style({
               'background-color': 'orange'
            }),
            animate(1000, style({
               'border-radius': '50px'
            })),
            animate(500)
         ]),
      ])
   ]
})
export class AppComponent {
   list = ['Milk', 'Sugar', 'Bread'];
   state = 'normal';
   wildState = 'normal';

   onAdd(item) {
      this.list.push(item);
   }

   onAnimate() {
      this.state = this.state === 'normal' ? 'highlighted' : 'normal';
      this.wildState = this.wildState === 'normal' ? 'highlighted' : 'normal';
   }

   onShrink() {
      this.wildState = 'shrunken';
   }
}
