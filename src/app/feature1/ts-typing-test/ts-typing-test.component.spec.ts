import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsTypingTestComponent } from './ts-typing-test.component';

describe('TsTypingTestComponent', () => {
  let component: TsTypingTestComponent;
  let fixture: ComponentFixture<TsTypingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsTypingTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsTypingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
