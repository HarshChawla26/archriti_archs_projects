import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { feedback } from 'src/app/appModels/feedback';
import { FeedbackService } from 'src/app/appServices/feedback.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {
  feedForm!: FormGroup;

  constructor(private fb: FormBuilder, private feedService: FeedbackService) {}
  id=0;
  ngOnInit(): void {
    setInterval(() => {
      if(this.showRes==true){
        this.showRes = false;
      }
      // console.log('Response closed');
      clearInterval();
    }, 8000);


    this.feedForm = this.fb.group({
      _id: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
      msg: ['', Validators.required],
    });
  }


  ValidateEmail(inputText: { value: string }) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!this.feedForm .value.email.match(mailformat)) {
      alert('You have entered an invalid email address!');
      return false;
    } else {
      return true;
    }
  }
  onformSubmit(_formdata: any) {
    if(this.ValidateEmail(this.feedForm.value)){
      this.feedService.postFeedback(this.feedForm.value).subscribe(
        (res) => {
          this.showrd();
          $(".responsespan")[0].innerText ="Thanks for your feedback! We will get back to you soon...🎈😄";
          // console.log(res);
        },
        (err) => {
          this.showrd();
          $(".responsespan")[0].innerText ="Something went wrong...Try again later..🧡🌺💛";
          console.log(`error has occured : ${err}`);
        }
      );
      this.feedForm = this.fb.group({
        _id: [''],
        name: ['', Validators.required],
        email: ['', Validators.required],
        msg: ['', Validators.required],
      });
    }
  }
  showRes:boolean = false;
  showrd(){
    if(this.showRes){
      this.showRes = false;
      $('.response').removeClass('trans-res-anime')
    }else{
      this.showRes = true;
      $('.response').addClass('trans-res-anime')
    }
  }
  
}
