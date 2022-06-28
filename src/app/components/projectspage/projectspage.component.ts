import { Component, OnInit } from '@angular/core';
import { displaycard } from 'src/app/appModels/displaycard';

@Component({
  selector: 'app-projectspage',
  templateUrl: './projectspage.component.html',
  styleUrls: ['./projectspage.component.css']
})
export class ProjectspageComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  disCard1:displaycard={
    id: 0,
    s_name: 'Mr Rajendra house',
    pictures: ['assets/media/Project/project_Display/mr_rajinder/pic1.jpg'],
    info: 'this is house of V'
  }
  disCard2:displaycard={
    id: 1,
    s_name: 'B house',
    pictures: ['assets/media/Project/project_Display/pic3.jpg'],
    info: 'this is house of B'
  }
  disCard3:displaycard={
    id: 2,
    s_name: 'C house',
    pictures: ['assets/media/Project/project_Display/pic4.jpg'],
    info: 'this is house of C'
  }
  disarray=[this.disCard1,this.disCard2,this.disCard3];
  
  title_of_div="";
  disImage=[];
  showdiv(it:any){
    this.title_of_div = it.s_name;
    this.disImage = it.pictures;
  }
}
