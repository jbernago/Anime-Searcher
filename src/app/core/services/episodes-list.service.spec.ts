import { TestBed } from '@angular/core/testing';

import { EpisodesListService } from './episodes-list.service';

describe('EpisodesListService', () => {
  let service: EpisodesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
