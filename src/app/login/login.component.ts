import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {
  }
  login(uname,password) {
    var name = localStorage.getItem("name");
    var pass = localStorage.getItem("password");
    if(uname.value == (name) && password.value == (pass)) {
      this.router.navigate(['/home']);
    }
    else {
      alert("Invalid password. Please try again");
    }
  }
  register() {
    this.router.navigate(['/register']);
  }
}
