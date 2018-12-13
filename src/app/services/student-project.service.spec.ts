import { TestBed, inject } from '@angular/core/testing';

import { StudentProjectService } from './student-project.service';

describe('StudentProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentProjectService]
    });
  });

  it('should be created', inject([StudentProjectService], (service: StudentProjectService) => {
    expect(service).toBeTruthy();
  }));
});
