import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() navSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(navItem: string) {
    this.navSelected.emit(navItem);
  }

}
