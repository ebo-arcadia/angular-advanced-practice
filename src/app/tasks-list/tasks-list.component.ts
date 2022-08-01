import { Component, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { TasksItemsComponent } from '../tasks-items/tasks-items.component';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements AfterViewInit {
  taskName: string | any;
  @ViewChildren(TasksItemsComponent) tasks: QueryList<TasksItemsComponent> | any = null;

  ngAfterViewInit() {
    this.tasks.forEach((task: any) => console.log(task))
  }
}
