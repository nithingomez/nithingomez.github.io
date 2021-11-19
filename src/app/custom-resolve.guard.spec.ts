import { TestBed } from '@angular/core/testing';

import { CustomResolveGuard } from './custom-resolve.guard';

describe('CustomResolveGuard', () => {
  let guard: CustomResolveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustomResolveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
