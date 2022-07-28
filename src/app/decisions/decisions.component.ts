import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'list-decisions',
  templateUrl: './decisions.component.html',
  styleUrls: ['./decisions.component.css']
})
export class DecisionsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input() decision = '';
  @Output() decided = new EventEmitter<boolean>();
  didDecide = false;

  decide(important: boolean) {
    this.decided.emit(important);
    this.didDecide = true;
  }
}
