import {Routes} from '@angular/router';
import {HomeComponent} from './public/home/home.component';
import {AboutComponent} from './public/about/about.component';
import {ContactComponent} from './public/contact/contact.component';

export const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: '', component: HomeComponent
  },
];
