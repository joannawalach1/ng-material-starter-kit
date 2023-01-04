import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSelectModel } from '../../models/mat-select.model';
import { SelectService } from '../../services/select.service';

@Component({
  selector: 'app-mat-select',
  styleUrls: ['./mat-select.component.scss'],
  templateUrl: './mat-select.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class MatSelectComponent {
  holidays$: Observable<MatSelectModel[]> = this._selectService.takeData();

  constructor(private _selectService: SelectService) {
  }
}
