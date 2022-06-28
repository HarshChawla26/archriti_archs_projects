import { Component, HostListener, OnInit } from '@angular/core';
import { faBriefcase, faCalendar, faHelmetSafety, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  years = faCalendar;
  bCase = faLayerGroup;
  superVision_ = faHelmetSafety;


  expObj = {
    "expYear":27,
    "projNo":1000,
    "supNo":800,
  }
  interval:number = 50;
  
  //initial declaration
  expyrCount:any = 0;
  projCount:any = 0;
  supCount:any = 0;

  eduration = this.interval/this.expObj.expYear;
  pduration = this.interval/this.expObj.projNo;
  seduration = this.interval/this.expObj.supNo;


  //interval setting for all 3
  expyrCountstop:any = setInterval(()=>{
    this.expyrCount++;
    if(this.expyrCount == this.expObj.expYear){
      this.expyrCount+="+";
      clearInterval(this.expyrCountstop);
    }
  },this.eduration)
  projCountstop:any = setInterval(()=>{
    this.projCount++;
    if(this.projCount == this.expObj.projNo){
      this.projCount+="+";
      clearInterval(this.projCountstop);
    }
  },this.pduration)
  supCountstop:any = setInterval(()=>{
    this.supCount++;
    if(this.supCount == this.expObj.supNo){
      this.supCount+="+";
      clearInterval(this.supCountstop);
    }
  },this.seduration)

  @HostListener("window:scroll") srollEffect(){
    // let section = $('.exp-belt')
    // console.log(section);
    // console.log($(window)[0].onscroll = function(){
    //   if(window.scrollY){

    //   }
    // })
  }
  constructor() { }
  
  ngOnInit(): void {
  }

}
