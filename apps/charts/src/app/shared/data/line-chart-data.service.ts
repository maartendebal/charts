import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';


@Injectable({
  providedIn: 'root'
})
export class LineChartDataService {

  public data: Array<{name: string, value: number}> = [];

  constructor() {
    for(let i=0; i < 10000; i++){
      this.data.push({name: 'line-1', value: Number(faker.random.numeric()) })
    }
  }
}
