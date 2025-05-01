import { TestBed } from '@angular/core/testing';

import { SignalShareService } from './signal-share.service';

describe('SignalShareService', () => {
  let service: SignalShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
