import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvellousService } from '../marvellous.service';
@Component({
  selector: 'app-batchdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchdetails.component.html',
  styleUrl: './batchdetails.component.css',
  providers : [MarvellousService]
})
export class BatchdetailsComponent 
{
  public batches : any = [];
  constructor(private obj : MarvellousService)
  {
    this.batches = this.obj.GetBatches();
  }
}
