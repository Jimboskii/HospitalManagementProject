import { Component, OnInit } from '@angular/core';
import { InsertService } from 'src/service/insert.service';

@Component({
  selector: 'app-insert-pharmacy-entry',
  templateUrl: './insert-pharmacy-entry.component.html',
  styleUrls: ['./insert-pharmacy-entry.component.css']
})
export class InsertPharmacyEntryComponent implements OnInit {

  form: any = {
    id: null,
    description: null,
  };

  data: any = {
    id: null,
    description: null,
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

    console.log(JSON.stringify(this.data));
   
    this.insertService.insertPharmacyEntry(JSON.stringify(this.data)).subscribe(
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
