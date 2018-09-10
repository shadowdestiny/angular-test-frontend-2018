import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './auth/project-list/project-list.component';
import { HeaderComponent } from './common/header/header.component';
import { LoaderComponent } from './common/loader/loader.component';

import { ProjectListservices} from './auth/project-list/services/project-list.services'
import {AuthenticationService} from '../../e2e/app/common/services/authentication.service';
import {routes} from './routes';
import { HomeComponent } from './public/home/home.component';
import { ContactComponent } from './public/contact/contact.component';
import { FooterComponent } from './common/footer/footer.component';
import { AboutComponent } from './public/about/about.component';
import { MenuTopComponent } from './common/menutop/menutop.component';
/*import { AuthenticationService } from  './auth/project-list/services/authentication.service';
import {Ng2Webstorage} from '@angular/cli';
import {HttpService} from './auth/project-list/services/http.service';*/

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    LoaderComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent,
    MenuTopComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    // Ng2Webstorage
  ],
  providers: [ProjectListservices, AuthenticationService],
  bootstrap: [AppComponent]

})
export class AppModule { }
