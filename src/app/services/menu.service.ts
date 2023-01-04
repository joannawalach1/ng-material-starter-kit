import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuModel } from '../models/menu.model';

@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(private _httpClient: HttpClient) {
  }

  takeData(): Observable<MenuModel[]> {
    return this._httpClient.get<MenuModel[]>('https://fakestoreapi.com/products/categories');
  }
}
