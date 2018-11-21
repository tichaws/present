import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Variable } from '../authen-guard/variable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  flip: boolean = false
  username:String = '';
  password:String = '';
  error: any = {
    msg:'Username or password invalid',
    status: false
  }

  constructor(public route:Router,public shared:Variable) { }

  ngOnInit() {
    this.shared.usrInfo.name = ''
    this.shared.usrInfo.pwd = ''
  }

  clickOpen(){
    this.flip = !this.flip;
  }

  onTyping(){

    this.error.status = false
  }

  login(){
    if(this.username =='' || this.password==''){
      this.error.status = true
      return
    }
    else{
      if(this.username=='1' && this.password=='1'){
        this.shared.usrInfo.name  = this.username
        this.shared.usrInfo.pwd = this.password
        this.route.navigateByUrl('/home')
      }
      else{
        this.route.navigateByUrl('/error')
      }
    }
  }

  validate(){

  }
}
