import { TestBed } from '@angular/core/testing';

import { Ng8O2AuthFbService } from './ng8-o2-auth-fb.service';

describe('Ng8O2AuthFbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ng8O2AuthFbService = TestBed.get(Ng8O2AuthFbService);
    expect(service).toBeTruthy();
  });
});
