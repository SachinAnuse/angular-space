import { TestBed } from '@angular/core/testing';

import { SnackBarGeneratorService } from './snack-bar-generator.service';

describe('SnackBarGeneratorService', () => {
  let service: SnackBarGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackBarGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
