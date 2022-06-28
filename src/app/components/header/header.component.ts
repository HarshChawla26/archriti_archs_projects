import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showTabsMenu:boolean = false;

  togMenu(){
    if(this.showTabsMenu){
      this.showTabsMenu = false;
    }else{
      this.showTabsMenu = true;
    }
  }

}
