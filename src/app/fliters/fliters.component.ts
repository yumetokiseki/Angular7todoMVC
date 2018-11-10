import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fliters',
  templateUrl: './fliters.component.html',
  styleUrls: ['./fliters.component.css']
})
export class FlitersComponent implements OnInit {

  constructor(public dataService: DataService) {}

  ngOnInit() {
  }

}
