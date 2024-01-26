import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
template: `<h1>Demonstrate of event binding</h1>

  <button (click) = "MarvellousEvent()">Marvellous</button>
  <button (click) = "InfosystemsEvent()">Infosystems</button>
  <button (click) = "AngularEvent($event)">Angular</button>
  <button (click) = "DipakEvent()">Dipak</button>
  <h1>{{str}}</h1>
  <h1>{{name}}</h1>
  `
 // styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public name : string = "";
  public str : string = "";
  public MarvellousEvent()
  {
    console.log("Marvellous Button Clicked");
  }

  public InfosystemsEvent()
  {
    this.name = "Infosystems Button Gets clicked";
  }

  public AngularEvent(Value : any)
  {
    console.log(Value);
  }

  public DipakEvent()
  {
    this.str = "welcome to my project.......";
  }

}
