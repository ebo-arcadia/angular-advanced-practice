import { Component, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { taskItems, taskPriorities} from '../models/tasks';
import { TasksItemsComponent } from '../tasks-items/tasks-items.component';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements AfterViewInit {
  taskItems = taskItems;
  taskPriorities = taskPriorities;

  @ViewChildren(TasksItemsComponent) tasks: QueryList<TasksItemsComponent>;

  ngAfterViewInit() {
    console.log(this.tasks)
  }
}
