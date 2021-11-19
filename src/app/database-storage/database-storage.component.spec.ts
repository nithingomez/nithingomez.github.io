import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseStorageComponent } from './database-storage.component';

describe('DatabaseStorageComponent', () => {
  let component: DatabaseStorageComponent;
  let fixture: ComponentFixture<DatabaseStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
