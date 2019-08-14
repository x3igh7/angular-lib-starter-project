import { TestBed } from '@angular/core/testing';

import { AngularStarterLibService } from './angular-starter-lib.service';

describe('AngularStarterLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularStarterLibService = TestBed.get(AngularStarterLibService);
    expect(service).toBeTruthy();
  });
});
