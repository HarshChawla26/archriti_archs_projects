import { Component, ElementRef, HostListener, VERSION, ViewChild } from '@angular/core';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
// declare var $: any;
import * as $ from 'jquery';  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showScrollTop:boolean = false;
  ngOnInit(): void {
  }
  
  @HostListener("document:scroll") scrollfunction(){
    if(document.body.scrollTop>0|| document.documentElement.scrollTop>0){
      $(".scroll-top").removeClass("d-none")
      $(".scroll-top").addClass("d-flex")
    }else{
      $(".scroll-top").removeClass("d-flex")
      $(".scroll-top").addClass("d-none")
    }
  }
  scrollTop(){
    window.scroll(0,0);
  }
  title = 'archWebsite';
  
}
