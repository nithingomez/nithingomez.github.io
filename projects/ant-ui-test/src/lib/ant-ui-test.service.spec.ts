import { TestBed } from '@angular/core/testing';

import { AntUiTestService } from './ant-ui-test.service';

describe('AntUiTestService', () => {
  let service: AntUiTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntUiTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
