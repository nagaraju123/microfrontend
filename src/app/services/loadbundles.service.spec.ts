import { TestBed } from '@angular/core/testing';

import { LoadbundlesService } from './loadbundles.service';

describe('LoadbundlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadbundlesService = TestBed.get(LoadbundlesService);
    expect(service).toBeTruthy();
  });
});
