import { TestBed } from '@angular/core/testing';

import { Quiz1Service } from './quiz1.service';

describe('Quiz1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Quiz1Service = TestBed.get(Quiz1Service);
    expect(service).toBeTruthy();
  });
});
