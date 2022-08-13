import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DOMManipulatorComponent } from './dom-manipulator.component';

describe('DOMManipulatorComponent', () => {
  let component: DOMManipulatorComponent;
  let fixture: ComponentFixture<DOMManipulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DOMManipulatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DOMManipulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
