import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoizationTestComponent } from './memoization-test.component';

describe('MemoizationTestComponent', () => {
  let component: MemoizationTestComponent;
  let fixture: ComponentFixture<MemoizationTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoizationTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoizationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
