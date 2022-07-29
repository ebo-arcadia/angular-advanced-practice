import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerParentViewChildComponent } from './timer-parent-view-child.component';

describe('TimerParentViewChildComponent', () => {
  let component: TimerParentViewChildComponent;
  let fixture: ComponentFixture<TimerParentViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerParentViewChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerParentViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
