import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ToolbarItem } from './models/toolbar-item.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations: [
    trigger("changeDivSize", [
      state('initial', style({
        width: '5px'
      })),
      state('final', style({
        width: '70px'
      })),
      transition('initial => final', animate('0.5s ease-in')),
      transition('final => initial', animate('0.5s ease-in'))
    ])
  ]
})
export class ToolbarComponent implements OnInit {

  currentState = 'initial';

  itemList: ToolbarItem[];

  constructor() { }

  ngOnInit() {
    this.itemList = [
      {icon:'close',  id:'teste1', text:'Elter'},
      {icon:'create', id:'teste2', text:'Souza'},
      {icon:'delete', id:'teste3', text:'Teste'},
      {icon:'edit',   id:'teste4', text:'Angular'},
      {icon:'blabla', id:'teste5', text:'Allow'}
    ];
  }

  changeState(state: string){
    if(this.currentState != state)
      this.currentState = state;
  }
}
