import {Component, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  @ViewChild('confirmpassword') confirmpassword: ElementRef;
  @ViewChild('password') password: ElementRef;
  @ViewChild('uname') uname: ElementRef;
  @ViewChild('name') name: ElementRef;
  @ViewChild('email') email: ElementRef;
  logins = [];
  constructor(private router: Router) {
  }
  register() {
    // tslint:disable-next-line:max-line-length
    if (this.name.nativeElement.value.length <= 0 || this.uname.nativeElement.value.length <= 0 || this.email.nativeElement.value.length <= 0
      || this.password.nativeElement.value.length <= 0 || this.confirmpassword.nativeElement.value.length <= 0) {
      alert('Please enter all the fields');
    }
    // tslint:disable-next-line:one-line
    else {
      if (this.password.nativeElement.value != this.confirmpassword.nativeElement.value) {
        alert('Password doesn\'t match');
      } else {
        localStorage.setItem('name', this.uname.nativeElement.value);
        localStorage.setItem('password', this.password.nativeElement.value);
        this.logins.push(localStorage.getItem('name') + ' was registered.');
        this.router.navigate(['/login']);
      }
    }
  }
}
