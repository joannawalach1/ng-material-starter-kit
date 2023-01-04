import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSelectComponent } from './components/mat-select/mat-select.component';
import { MatSelectComponentModule } from './components/mat-select/mat-select.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'public-holidays', component: MatSelectComponent }]), MatSelectComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
