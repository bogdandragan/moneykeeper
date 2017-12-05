import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
  private _facebookUrl:string = "/api/authFacebook";

  constructor(private http: HttpClient) { }

  authWithGoogle(){
    return this.http.get(this._facebookUrl)
        .map(data => data)
        .catch(this._handleError);

  }

  _handleError(error){
    return Observable.throw(error || "Server Error");
  }


}
