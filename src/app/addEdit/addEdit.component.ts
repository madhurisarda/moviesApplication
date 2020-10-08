import {Component, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addEdit',
  templateUrl: './addEdit.component.html',
  styleUrls: ['./addEdit.component.css']
})
export class AddEditComponent{
  @ViewChild('title') title: ElementRef;
  @ViewChild('genres') genres: ElementRef;
  @ViewChild('duration') duration: ElementRef;
  @ViewChild('releaseDate') releaseDate: ElementRef;
  @ViewChild('originalTitle') originalTitle: ElementRef;
  @ViewChild('storyline') storyline: ElementRef;
  @ViewChild('imdbRating') imdbRating: ElementRef;
  @ViewChild('posterurl') posterurl: ElementRef;
  logins = [];
  constructor(private router: Router) {
  }
  addMovie() {
    // tslint:disable-next-line:max-line-length
    if (this.title.nativeElement.value.length <= 0 || this.genres.nativeElement.value.length <= 0 || this.duration.nativeElement.value.length <= 0
      || this.releaseDate.nativeElement.value.length <= 0 || this.originalTitle.nativeElement.value.length <= 0 || this.storyline.nativeElement.value.length <= 0
      || this.imdbRating.nativeElement.value.length <= 0 || this.posterurl.nativeElement.value.length <= 0) {
      alert('Please enter all the fields');
    }
    // tslint:disable-next-line:one-line
    else {
      var movieDetails =  JSON.parse(localStorage.getItem(this.title.nativeElement.value));

        localStorage.setItem('name', this.uname.nativeElement.value);
        localStorage.setItem('password', this.password.nativeElement.value);
        this.logins.push(localStorage.getItem('name') + ' was registered.');
        this.router.navigate(['/login']);
      }
    }
  }
}
