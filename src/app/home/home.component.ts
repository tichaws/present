import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  detailId: any =0;
  @ViewChild('modal') detail;

  constructor() { }

  ngOnInit() {

  }

  viewDetail(i){
    this.detailId = i
    this.detail.show();
  }


}
