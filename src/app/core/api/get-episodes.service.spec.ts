import { TestBed } from '@angular/core/testing';

import { GetEpisodesService } from './get-episodes.service';

describe('GetEpisodesService', () => {
  let service: GetEpisodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEpisodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
