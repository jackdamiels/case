import { Component } from '@angular/core';

@Component({
  selector: 'cam-case-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = 'Case management';
  showNav = true;
}
