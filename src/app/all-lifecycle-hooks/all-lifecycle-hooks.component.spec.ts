import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLifecycleHooksComponent } from './all-lifecycle-hooks.component';

describe('AllLifecycleHooksComponent', () => {
  let component: AllLifecycleHooksComponent;
  let fixture: ComponentFixture<AllLifecycleHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLifecycleHooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLifecycleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
