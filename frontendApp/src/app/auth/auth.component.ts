import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  authGoogle(){
    this.authService.authWithGoogle().subscribe(
        data => console.log(data),
        error => console.log(error)
    );
  }

  authFacebook(){
    alert('facebook');
  }

}
