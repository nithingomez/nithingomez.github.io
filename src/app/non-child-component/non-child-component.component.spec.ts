import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonChildComponentComponent } from './non-child-component.component';

describe('NonChildComponentComponent', () => {
  let component: NonChildComponentComponent;
  let fixture: ComponentFixture<NonChildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonChildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
