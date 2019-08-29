import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  animations: [
    trigger("gridFade", [
      state('off', style({
        opacity: '0'
      })),
      state('on', style({
        opacity: '100'
      })),
      transition('on => off', animate('0.5s ease-in')),
      transition('off => on', animate('0.5s ease-in'))
    ])
  ]
})
export class GridComponent implements OnInit {

  gridState: string = 'off';

  constructor() { }

  ngOnInit() {
  }

}
