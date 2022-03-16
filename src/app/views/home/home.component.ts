import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { FactModel } from 'src/app/models/fact';
import { FactService } from 'src/app/services/fact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<boolean> = new Subject();

  public catFacts: FactModel[] = [];

  constructor(private readonly service: FactService) { }

  ngOnInit(): void {
    this.getFacts();
  }

  ngOnDestroy(): void {
      this.destroy$.next(true);
  }

  private getFacts(): void {
    this.service.fetch().pipe(
      takeUntil(this.destroy$),
      map((response) => this.catFacts = response),
    ).subscribe();
  }
}
