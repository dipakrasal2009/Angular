import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public value : any;
  public AcceptAmount(No : any)
  {
    console.log("enterd amount is : "+No);
    this.value = No;
  }
}
