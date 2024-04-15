import { TestBed } from '@angular/core/testing';

import { SmLoginService } from './sm-login.service';

describe('SmLoginService', () => {
  let service: SmLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
