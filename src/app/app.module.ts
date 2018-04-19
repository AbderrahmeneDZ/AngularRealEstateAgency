import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap';
import { RouterModule} from '@angular/router';
import { AgmCoreModule} from '@agm/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AgencyComponent } from './agency/agency.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { APP_BASE_HREF } from '@angular/common';
import { OurServicesComponent } from './our-services/our-services.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AgencyComponent,
    CareerComponent,
    ContactComponent,
    OurServicesComponent,
    SignInComponent,
    SignUpComponent,
    ServiceDetailComponent
  ],
  entryComponents:[
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule, 
    CollapseModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'accueil', component: HomeComponent},
      {path: 'agence', component: AgencyComponent},
      {path: 'emplois', component: CareerComponent},
      {path: 'services', component: OurServicesComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'service', component: ServiceDetailComponent},
      {path: '**', component: HomeComponent}]
    ),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCspxN46ms2-VTT_EpefKrJwNKd6jw9eO8'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
