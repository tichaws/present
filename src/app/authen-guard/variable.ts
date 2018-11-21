import { Injectable } from '@angular/core';

@Injectable()
export class Variable {

  public usrInfo: any=[{
      name:'',
      pwd:''
  }]
  public newsSerach: any=[{}];

  public userInfoChangedSource;
  public observableEvents;
  public userInfoResp: any = null;
  public userRoleResp: any = null;
  public userName:string;
  public merchantCd;
  public provinceList;
  public donateTypeList;
}