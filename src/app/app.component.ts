import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedNav = 'shopping-list';

  onNavigate(navItem: string) {
    this.loadedNav = navItem;
  }
}
