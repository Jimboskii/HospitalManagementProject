import { Component, OnInit } from '@angular/core';
import { InsertService } from 'src/service/insert.service';

@Component({
  selector: 'app-insert-nurse-entry',
  templateUrl: './insert-nurse-entry.component.html',
  styleUrls: ['./insert-nurse-entry.component.css']
})
export class InsertNurseEntryComponent implements OnInit {

  form: any = {
    id: null,
    description: null,
    pat: null,
  };

  data: any = {
    id: null,
    description: null,
    pat: {
      patientId:null
    }
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private insertService: InsertService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.data.id=this.form.id;
    this.data.description=this.form.description;
    this.data.pat.patientId = this.form.pat;

    console.log(JSON.stringify(this.data));
   
    this.insertService.insertNurseEntry(JSON.stringify(this.data)).subscribe(
      data1 => {
        console.log(data1);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
