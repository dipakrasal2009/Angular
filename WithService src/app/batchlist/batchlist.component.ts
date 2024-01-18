import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DipakService } from '../dipak.service';
@Component({
  selector: 'app-batchlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchlist.component.html',
  styleUrl: './batchlist.component.css',
  providers : [DipakService]
})
export class BatchlistComponent 
{
  public Batches : any = [];
  constructor(private obj : DipakService)
  {
    this.Batches = this.obj.getBatches();
  }
}
