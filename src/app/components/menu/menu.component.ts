import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuModel } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';


@Component({
  selector: 'app-menu',
  styleUrls: ['./menu.component.scss'],
  templateUrl: './menu.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  readonly menu$: Observable<MenuModel[]> = this._menuService.takeData();

  constructor(private _menuService: MenuService) {
  }
}
