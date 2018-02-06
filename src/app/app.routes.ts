import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { InfoComponent } from './components/info/info.component';
import { TicketmasterComponent } from './components/ticketmaster/ticketmaster.component';
import { TicketmasterInfoComponent } from './components/ticketmaster-info/ticketmaster-info.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'info/:id', component: InfoComponent },
    { path: 'ticketmaster', component: TicketmasterComponent },
    { path: 'ticketmaster/:id', component: TicketmasterInfoComponent },
    
    { path: '**', pathMatch: 'full', redirectTo: '' }

];

export const router = RouterModule.forRoot(routes);
