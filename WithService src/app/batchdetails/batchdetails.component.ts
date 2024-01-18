import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DipakService } from '../dipak.service';
@Component({
  selector: 'app-batchdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchdetails.component.html',
  styleUrl: './batchdetails.component.css',
  providers : [DipakService]
})
export class BatchdetailsComponent 
{
  public Batches : any = [];
  constructor(private obj : DipakService)
  {
    this.Batches = this.obj.getBatches();
  }
}
