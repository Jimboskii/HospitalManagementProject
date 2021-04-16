import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drug } from 'src/common/drug';
import { Nurseentry } from 'src/common/nurseentry';
import { Patient } from 'src/common/patient';
import { Pharmentry } from 'src/common/pharmentry';

@Injectable({
  providedIn: 'root'
})
export class GetService {
  private baseUrl = 'http://localhost:8080/hospital/';


  constructor(private httpClient: HttpClient) { }

  getDrugList(): Observable<Drug[]>{
    return this.httpClient.get<Drug[]>(this.baseUrl + 'drug/list');
  }

  getNurseEntryList(): Observable<Nurseentry[]>{
    return this.httpClient.get<Nurseentry[]>(this.baseUrl + 'nurseentry/list');
  }

  getPatientList(): Observable<Patient[]> { 
    return this.httpClient.get<Patient[]>(this.baseUrl + 'patient/list');
   }

   getPharmEntryList(): Observable<Pharmentry[]>{
    return this.httpClient.get<Pharmentry[]>(this.baseUrl + 'pharmacyentry/list');
  }
}
