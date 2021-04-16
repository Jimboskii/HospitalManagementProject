import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },

  { path: 'drug/insert', component: InsertDrugComponent },
  { path: 'nurseentry/insert', component: InsertNurseEntryComponent },
  { path: 'patient/insert', component: InsertPatientComponent },
  { path: 'pharmacyentry/insert', component: InsertPharmacyEntryComponent },


  { path: 'nurseentry/list', component: NurseEntryListComponent },
  { path: 'pharmacyentry/list', component: PharmEntryListComponent },
  { path: 'patient/list', component: PatientListComponent },
  { path: 'drug/list', component: DrugListComponent },



  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }