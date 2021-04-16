import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/common/patient';
import { GetService } from 'src/service/get.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {


  patient: Patient[];

  constructor(private get: GetService) { }

  ngOnInit(){
    this.listPatients();
  }

listPatients(){
  this.get.getPatientList().subscribe(
    data => {

      this.patient = data;
    }
  )
}


}
