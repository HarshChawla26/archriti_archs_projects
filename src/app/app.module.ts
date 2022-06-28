import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailsComponent } from './components/details/details.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { IntroComponent } from './components/details/intro/intro.component';
import { AboutComponent } from './components/details/about/about.component';
import { ProjectsComponent } from './components/agenda/projects/projects.component';
import { ExperienceComponent } from './components/agenda/experience/experience.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectspageComponent } from './components/projectspage/projectspage.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayCardComponent } from './components/projectspage/display-card/display-card.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailsComponent,
    AgendaComponent,
    ContactsComponent,
    IntroComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    ProjectspageComponent,
    ContactPageComponent,
    DisplayCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
