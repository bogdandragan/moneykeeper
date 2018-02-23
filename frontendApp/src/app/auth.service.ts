import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
  private googleUrl:string = "/auth/google";
  authData = {
    isLoggedIn: false,
    user : null
  };
  private checkAuthUrl: string = "/auth/check";

  constructor(private http: HttpClient) { }

  checkAuth(){
    return this.http.post<any>(this.checkAuthUrl,{});
  }


  authWithGoogle(){
    return this.http.get(this.googleUrl)
        .map(data => data)
        .catch(this._handleError);

  }

  _handleError(error){
    return Observable.throw(error || "Server Error");
  }


}
