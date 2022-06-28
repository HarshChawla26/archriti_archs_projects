import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { feedback } from '../appModels/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  url = "https://archiritiarchitects.azurewebsites.net/feedbacks"
  constructor(private http:HttpClient) {}

  postFeedback(feedForm:feedback){
    return this.http.post(this.url,feedForm) ;
  }
}
