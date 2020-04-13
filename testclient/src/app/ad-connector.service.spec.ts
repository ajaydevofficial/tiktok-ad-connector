import { TestBed } from '@angular/core/testing';

import { AdConnectorService } from './ad-connector.service';

describe('AdConnectorService', () => {
  let service: AdConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
