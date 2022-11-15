import { TestBed } from '@angular/core/testing';

import { LineChartDataService } from './line-chart-data.service';

describe('LineChartDataService', () => {
  let service: LineChartDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineChartDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
