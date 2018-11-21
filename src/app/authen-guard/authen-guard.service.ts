import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Variable } from './variable';

@Injectable()
export class GuardsService {
  constructor(private router: Router,public shared:Variable) { }
    
  canActivate(): Promise<boolean> | boolean {
      if(this.shared.usrInfo.name =='1' && this.shared.usrInfo.pwd == '1'){
          return true;
      }
      else{
          this.router.navigate(['/error']);
      }
      
  }

}
