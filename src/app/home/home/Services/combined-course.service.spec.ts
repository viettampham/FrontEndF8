import { TestBed } from '@angular/core/testing';

import { CombinedCourseService } from './combined-course.service';

describe('CombinedCourseService', () => {
  let service: CombinedCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombinedCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
