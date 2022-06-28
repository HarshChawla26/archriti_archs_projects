import { Component, Input, OnInit } from '@angular/core';
import { displaycard } from 'src/app/appModels/displaycard';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {
  @Input() site_obj:any;
  // img:any = this.site_obj.pictures[0];
  constructor() { }


  

  ngOnInit(): void {
    
  }





}
