import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FactModel } from '../models/fact';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { Fact } from '../data/fact';

@Injectable({
  providedIn: 'root'
})
export class FactService {

  constructor(private readonly http: HttpClient) { }

  public fetch(): Observable<FactModel[]> {
    return this.http.get<Fact[]>(`${environment.apiUrl}/facts`).pipe(
      mergeMap((response: Fact[]) => from(response)),
      map(fact => new FactModel(fact.createdAt, fact.text, fact.type, fact.updatedAt)),
      toArray()
    )
  }
}
