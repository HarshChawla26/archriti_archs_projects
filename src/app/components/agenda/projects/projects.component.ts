import { Component, OnInit } from '@angular/core';
// import {img} from './media/Project';
// import image
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  img1:string = "assets/media/Project/IntroPageCards/pic1.jpg";
  img2:string = "assets/media/Project/IntroPageCards/pic2.jpg";
  img3:string = "assets/media/Project/IntroPageCards/pic3.jpg";
  img4:string = "assets/media/Project/IntroPageCards/pic4.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
