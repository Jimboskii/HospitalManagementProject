import { Component, OnInit } from '@angular/core';
import { InsertService } from 'src/service/insert.service';

@Component({
  selector: 'app-insert-drug',
  templateUrl: './insert-drug.component.html',
  styleUrls: ['./insert-drug.component.css']
})
export class InsertDrugComponent implements OnInit {

  form: any = {
    id: null,
    drugName: null,
    drugType: null,
    drugDesc: null
  };

  data: any = {
    id: null,
    drugName: null,
    drugType: null,
    drugDesc: null
  };

  isSuccessful = false;
  isRegisterDrugFailed = false;
  errorMessage = '';

  constructor(private insertService: InsertService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.data.id=this.form.id;
    this.data.drugName=this.form.drugName;
    this.data.drugType=this.form.drugType;
    this.data.drugDesc=this.form.drugDesc;

    console.log(this.data);

    // {"id": "4", "drugName": "testing", "drugType": "ALLERGY", "drugDesc": "asdada"}
    this.insertService.insertDrug(JSON.stringify(this.data)).subscribe(
      data1 => {
        this.isSuccessful = true;
        this.isRegisterDrugFailed = false;
        console.log(data1);
      }
      // err => {
      //   this.errorMessage = err.error.message;
      //   this.isRegisterDrugFailed = true;
        
      // }
      
    );
  }
}
