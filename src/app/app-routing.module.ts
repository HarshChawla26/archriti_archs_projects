import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './components/agenda/agenda.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ProjectspageComponent } from './components/projectspage/projectspage.component';

const routes: Routes = [
  { path: '', component: AgendaComponent },
  { path: 'projects', component: ProjectspageComponent },
  { path: 'contactus', component: ContactPageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
