import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const INSERT_API = 'http://localhost:8080/hospital/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};



@Injectable({
  providedIn: 'root'
})
export class InsertService {



  constructor(private http:HttpClient) { }

  insertPatient(patientDetails:any): Observable<any>
  {
    return this.http.post(INSERT_API + 'patient/insert', patientDetails, httpOptions);
  }

  insertDrug(drugDetails:any): Observable<string>
  {
    
    return this.http.post<string>(INSERT_API + 'drug/insert', drugDetails, httpOptions);
  }

  insertNurseEntry(nurseEntryDetails:any): Observable<any>
  {
    
    return this.http.post(INSERT_API + 'nurseentry/insert', nurseEntryDetails, httpOptions);
  }

  insertPharmacyEntry(pharmacyEntryDetails:any): Observable<any>
  {
    
    return this.http.post(INSERT_API + 'pharmacyentry/insert', pharmacyEntryDetails, httpOptions);
  }

}
