import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntUiTestComponent } from './ant-ui-test.component';

describe('AntUiTestComponent', () => {
  let component: AntUiTestComponent;
  let fixture: ComponentFixture<AntUiTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntUiTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntUiTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
