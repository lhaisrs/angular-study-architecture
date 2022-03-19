import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TaskModel } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { takeUntil, map, mergeMap } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: '../views/home/home.view.html',
  styleUrls: ['../views/home/home.view.scss'],
})

export class HomeViewModel implements OnInit, OnDestroy {

  private readonly destroy$: Subject<boolean> = new Subject();
  public description: string = '';
  public tasks: Observable<TaskModel[]> = new Observable(); 

  constructor(private readonly service: TaskService) { }

  ngOnInit(): void {
    this.readTasks();
   }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  public readTasks(): void {
   this.tasks = this.service.fetch().valueChanges();
  }

  public async createTask(): Promise<void> {
    const _createdDate: string = new Date().toString();
    await this.service.create(this.description, _createdDate);
    this.description = '';
  }

  public updateTask(task: TaskModel): void {
    //Update completed field
    task.completed = true;
    task.updatedAt = new Date().toString();
    this.service.update(task);
  }

  public deleteTask(task: TaskModel): void {
    this.service.delete(task);
  }

  // private transformDate(date?: string): string {
  //   return moment(date).format('dddd, HH:mm')
  // }

}

