import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FactModel } from 'src/app/models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: '../views/home/home.view.html',
  styleUrls: ['../views/home/home.view.scss']
})
export class HomeViewModel implements OnInit, OnDestroy {

  private readonly destroy$: Subject<boolean> = new Subject();

  constructor() { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
      this.destroy$.next(true);
  }
}
