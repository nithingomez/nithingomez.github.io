import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDemoComponent } from './css-demo.component';

describe('CssDemoComponent', () => {
  let component: CssDemoComponent;
  let fixture: ComponentFixture<CssDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
