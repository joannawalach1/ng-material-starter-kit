import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSelectModel } from '../models/mat-select.model';

@Injectable({ providedIn: 'root' })
export class SelectService {
  constructor(private _httpClient: HttpClient) {
  }

  takeData(): Observable<MatSelectModel[]> {
    return this._httpClient.get<MatSelectModel[]>('https://date.nager.at/api/v2/publicholidays/2020/US');
  }
}
