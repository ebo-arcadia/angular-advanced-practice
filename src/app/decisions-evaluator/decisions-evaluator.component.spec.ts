import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionsEvaluatorComponent } from './decisions-evaluator.component';

describe('DecisionsEvaluatorComponent', () => {
  let component: DecisionsEvaluatorComponent;
  let fixture: ComponentFixture<DecisionsEvaluatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecisionsEvaluatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionsEvaluatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
