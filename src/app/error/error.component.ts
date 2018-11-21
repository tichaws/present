import { Component, OnInit } from '@angular/core';
import { Variable } from '../authen-guard/variable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(public shared:Variable,public route:Router) { }

  ngOnInit() {
    this.shared.usrInfo.name  = ''
    this.shared.usrInfo.pwd = ''
  }

  goHome(){
    this.route.navigate(['/'])
  }
}
