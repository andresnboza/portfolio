import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { TopNavigationBarComponent } from './components/top-navigation-bar/top-navigation-bar.component';
import { FooterComponent } from './components/footer/footer.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app.reducer';

import { environment } from 'src/environments/environment';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { FeatureProjectsComponent } from './components/feature-projects/feature-projects.component';
import { MyProcessComponent } from './components/my-process/my-process.component';
import { GetToKnowMeComponent } from './components/get-to-know-me/get-to-know-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { ClientsFeedbackComponent } from './components/clients-feedback/clients-feedback.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { GeneralModule } from './modules/general/general.module';


@NgModule({
  declarations: [
    AppComponent,
    TopNavigationBarComponent,
    FooterComponent,
    MainBannerComponent,
    ServicesSectionComponent,
    FeatureProjectsComponent,
    MyProcessComponent,
    GetToKnowMeComponent,
    ContactComponent,
    ClientsFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Regarding redux
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    GeneralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
