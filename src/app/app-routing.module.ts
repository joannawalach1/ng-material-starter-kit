import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'categories-menu', component: MenuComponent}])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
