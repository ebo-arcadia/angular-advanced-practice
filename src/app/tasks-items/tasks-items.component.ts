import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'tasks-items',
  templateUrl: './tasks-items.component.html',
  styleUrls: ['./tasks-items.component.css']
})
export class TasksItemsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}
  @Input() taskItem!: string | any;
  @Input() taskPriority!: string | any;
}
