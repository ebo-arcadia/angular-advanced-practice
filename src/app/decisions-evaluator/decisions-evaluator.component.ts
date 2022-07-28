import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'decisions-evaluator',
  templateUrl: './decisions-evaluator.component.html',
  styleUrls: ['./decisions-evaluator.component.css']
})
export class DecisionsEvaluatorComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }

  decisions = ['buy a car', 'buy a house', 'eat well', 'watch movie', 'work hard', 'travel', 'dating', 'sleep', 'swimming', 'shopping']
  important = 0;
  not_important = 0;

  finallyDecided(important: boolean) {
    if (important) { this.important++;}
    else { this.not_important++;}
  }
}
