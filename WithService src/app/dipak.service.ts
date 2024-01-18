import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DipakService
 {

  constructor() { }

  getBatches()
  {
    return [
      {"Name":"PPA","Duration":"3 Months","Fees":19500},
      {"Name":"LB","Duration":"3.5 Months","Fees":19000},
      {"Name":"Angular","Duration":"4 Months","Fees":20000},
      {"Name":"Python","Duration":"3 Month","Fees":19500}
    ];
  }
}
