import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authInterceptorProviders } from 'src/helper/auth.interceptor';
import { HomeComponent } from 'src/component/home/home.component';
import { LoginComponent } from 'src/component/login/login.component';
import { ProfileComponent } from 'src/component/profile/profile.component';
import { RegisterComponent } from 'src/component/register/register.component';
import { InsertDrugComponent } from 'src/component/insert-drug/insert-drug.component';
import { InsertNurseEntryComponent } from 'src/component/insert-nurse-entry/insert-nurse-entry.component';
import { InsertPatientComponent } from 'src/component/insert-patient/insert-patient.component';
import { InsertPharmacyEntryComponent } from 'src/component/insert-pharmacy-entry/insert-pharmacy-entry.component';
import { NurseEntryListComponent } from 'src/component/nurse-entry-list/nurse-entry-list.component';
import { PharmEntryListComponent } from 'src/component/pharm-entry-list/pharm-entry-list.component';
import { PatientListComponent } from 'src/component/patient-list/patient-list.component';
import { DrugListComponent } from 'src/component/drug-list/drug-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    InsertDrugComponent,
    InsertNurseEntryComponent,
    InsertPatientComponent,
    InsertPharmacyEntryComponent,
    NurseEntryListComponent,
    PharmEntryListComponent,
    PatientListComponent,
    DrugListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }