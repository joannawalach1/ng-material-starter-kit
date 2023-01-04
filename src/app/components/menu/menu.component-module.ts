import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MenuComponent } from './menu.component';

@NgModule({
  imports: [MatListModule, CommonModule],
  declarations: [MenuComponent],
  providers: [],
  exports: [MenuComponent]
})
export class MenuComponentModule {
}
