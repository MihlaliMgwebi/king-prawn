import { TestBed } from '@angular/core/testing';

import { ShoppingResultService } from './shopping-result.service';

describe('ShoppingResultService', () => {
  let service: ShoppingResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
