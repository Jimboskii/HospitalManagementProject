import { Component, OnInit } from '@angular/core';
import { Nurseentry } from 'src/common/nurseentry';
import { GetService } from 'src/service/get.service';

@Component({
  selector: 'app-nurse-entry-list',
  templateUrl: './nurse-entry-list.component.html',
  styleUrls: ['./nurse-entry-list.component.css']
})
export class NurseEntryListComponent implements OnInit {

nurseEntry: Nurseentry[];

  constructor(private get: GetService) { }

  ngOnInit(){
    this.listNurseEntries();
  }

  listNurseEntries(){
    this.get.getNurseEntryList().subscribe(
      data => {

        this.nurseEntry = data;
      }
    )
  }

}
