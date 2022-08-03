import { Component, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { TasksItemsComponent } from '../tasks-items/tasks-items.component';
import { Tasks } from '../models/tasks';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements AfterViewInit {
  tasks = Tasks

  @ViewChildren(TasksItemsComponent) taskList: QueryList<TasksItemsComponent> | any = null;

  ngAfterViewInit() {
    this.taskList.forEach((task: any) => console.log(task))
  }
}
