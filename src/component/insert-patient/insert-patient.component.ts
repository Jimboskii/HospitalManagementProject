import { Component, OnInit } from '@angular/core';
import { InsertService } from 'src/service/insert.service';

@Component({
  selector: 'app-insert-patient',
  templateUrl: './insert-patient.component.html',
  styleUrls: ['./insert-patient.component.css']
})
export class InsertPatientComponent implements OnInit {

  form: any = {
    patientId: null,
    patientName: null,
    deptName: null,
    admitted: null,
    usage: null,
  };

  data: any = {
    patientId: null,
    patientName: null,
    deptName: null,
    admitted: null,
    // usage:[]
    usage: [{
      id:null
    }]
  };

  isSuccessful = false;
  isRegisterPatientFailed = false;
  errorMessage = '';

  constructor(private insertService: InsertService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {


    this.data.patientId=this.form.patientId;
    this.data.patientName=this.form.patientName;
    this.data.deptName=this.form.deptName;
    this.data.admitted=this.form.admitted;
    // this.data.usage.push(this.form.usage);
    this.data.usage[0].id=this.form.usage;

    console.log(this.data);
    
    // {"patientId":1,"patientName":"John","deptName":"ICU","admitted":null,"usage":[{"id":1},{"id":2}]
    //                                                                              ["{"id":1}"]
    this.insertService.insertPatient(JSON.stringify(this.data)).subscribe(
      data2 => {
        console.log(data2);
        this.isSuccessful = true;
        this.isRegisterPatientFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isRegisterPatientFailed = true;
      }
    )
  }

}
