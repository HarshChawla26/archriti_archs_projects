import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronDown, faFaceKissBeam, faGlassMartiniAlt } from '@fortawesome/free-solid-svg-icons';
import { quote } from 'src/app/appModels/quote.model';
import { QuotesService } from 'src/app/appServices/quotes.service';
// import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  faChevronDown = faChevronDown;

  

  quotesArray!: quote[];
  quoteToDisplay:any ;

  rter:any;
  constructor(
    private router : Router,
    private qouService: QuotesService
  ){ 
    this.rter = router;
  }

  // scrollEffect(): void{
  //   console.log($("#about"));
  // }
  ngOnInit(): void {
    this.getQuotes();
    this.qouService.getQuotesList().subscribe((res:any)=>{
      this.quotesArray = res;
      this.displayQuote();
    })
    
  }
  getQuotes(){
    
 6}

 dynquote:any;
 dynAuthor:any;

  displayQuote(): void{
    let randNumber = Math.floor(Math.random() * 10);
    this.quoteToDisplay =  this.quotesArray[randNumber];
    this.dynquote = `${this.quoteToDisplay.content}`;
    this.dynAuthor = ` ~   ${this.quoteToDisplay.author}`;
    // console.log($('.k'))
  }
}
  
