import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  rt:any;
  constructor(
    private router : Router
  ) {
    this.rt = router
  }

  ngOnInit(): void {
  }

}
