import { Component, OnInit } from '@angular/core';
import { Pharmentry } from 'src/common/pharmentry';
import { GetService } from 'src/service/get.service';
@Component({
  selector: 'app-pharm-entry-list',
  templateUrl: './pharm-entry-list.component.html',
  styleUrls: ['./pharm-entry-list.component.css']
})
export class PharmEntryListComponent implements OnInit {

pharmEntry: Pharmentry[];

  constructor(private get : GetService) { }

  ngOnInit(){
    this.listPharmEntries();
  }
  listPharmEntries() {
    this.get.getPharmEntryList().subscribe(
      data => {

        this.pharmEntry = data;
      }

    )
  }

}
