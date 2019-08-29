import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-item',
  templateUrl: './toolbar-item.component.html',
  styleUrls: ['./toolbar-item.component.scss']
})
export class ToolbarItemComponent implements OnInit {

  @Input() item: ToolbarItemComponent;
  constructor() { }

  ngOnInit() {
  }

}
