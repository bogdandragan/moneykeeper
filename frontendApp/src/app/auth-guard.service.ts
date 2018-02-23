import {Injectable}     from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private authService:AuthService, private router:Router) {
    }

    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> {
        return this.authService.checkAuth().map(data => {
            this.authService.authData.isLoggedIn = true;
            this.authService.authData.user = {id:data._id,email:data.email,name:data.name};
            console.log(this.authService.authData);
            return true;
        }).catch(err => {
            console.log(err);
            this.router.navigate(['/login']);
            return Observable.of(false);
        });
    }

}
