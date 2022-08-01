import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/tasks';

@Component({
  selector: 'tasks-items',
  templateUrl: './tasks-items.component.html',
  styleUrls: ['./tasks-items.component.css']
})
export class TasksItemsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}
  task = Task;

  @Input() taskId!: number | any;
  @Input() taskName!: string | any;
  @Input() taskPriority!: string | any;
  @Input() taskStatus!: string | any;
}
