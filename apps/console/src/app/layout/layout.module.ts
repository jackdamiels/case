import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [HeaderComponent, NavComponent],
  exports: [HeaderComponent, NavComponent],
  imports: [RouterModule, MatIconModule],
  providers: []
})
export class LayoutModule {}
