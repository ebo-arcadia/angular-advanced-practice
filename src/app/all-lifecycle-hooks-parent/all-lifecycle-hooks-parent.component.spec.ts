import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLifecycleHooksParentComponent } from './all-lifecycle-hooks-parent.component';

describe('AllLifecycleHooksParentComponent', () => {
  let component: AllLifecycleHooksParentComponent;
  let fixture: ComponentFixture<AllLifecycleHooksParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLifecycleHooksParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLifecycleHooksParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
