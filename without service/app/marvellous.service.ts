import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService 
{
  constructor() { }

  GetBatches()
  {
    return [
      {"Name" : "Pre-Placment Activity","Duration" : "3 Months" ,"Fees" : 20000},
      {"Name" : "Logic Building","Duration" : "5 Months","Fees" : 25000},
      {"Name" : "Pythone Machine learning","Duration" : "4 Months","Fees" : 20000},
      {"Name" :  "Angular with mean stack","Duration" : "3.5 months" ,"Fees" : 19500}
    ];
  }
}
