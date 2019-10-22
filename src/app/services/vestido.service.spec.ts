import { TestBed } from '@angular/core/testing';

import { VestidoService } from './vestido.service';

describe('VestidoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VestidoService = TestBed.get(VestidoService);
    expect(service).toBeTruthy();
  });
});
