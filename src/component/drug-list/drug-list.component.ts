import { Component, OnInit } from '@angular/core';
import { Drug } from 'src/common/drug';
import { GetService } from 'src/service/get.service';

@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.css']
})
export class DrugListComponent implements OnInit {

  drug: Drug[];

  constructor(private get: GetService) { }

  ngOnInit() {
    this.listDrugs();
  }

  listDrugs(){
    this.get.getDrugList().subscribe(
      data => {
        this.drug = data;
      }
    )
  }

}
