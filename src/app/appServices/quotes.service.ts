import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  url = "https://archiritiarchitects.azurewebsites.net/quotes"
  constructor(private http:HttpClient) {}
  
  getQuotesList(){
    return this.http.get(this.url);
  }
  


}
