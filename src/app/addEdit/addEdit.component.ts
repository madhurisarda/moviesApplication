import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MoviesService} from '../movies/movies.service';
import {Movie} from '../movies/movie';
import {Location} from '@angular/common';

@Component({
  selector: 'app-addEdit',
  templateUrl: './addEdit.component.html',
  styleUrls: ['./addEdit.component.css']
})
export class AddEditComponent  implements OnInit {
  @ViewChild('title') title: ElementRef;
  @ViewChild('genres') genres: ElementRef;
  @ViewChild('duration') duration: ElementRef;
  @ViewChild('releaseDate') releaseDate: ElementRef;
  @ViewChild('originalTitle') originalTitle: ElementRef;
  @ViewChild('storyline') storyline: ElementRef;
  @ViewChild('imdbRating') imdbRating: ElementRef;
  @ViewChild('posterurl') posterurl: ElementRef;
  selectedMovie: Movie;
  movie = {};

  constructor(private route: ActivatedRoute,    private moviesService: MoviesService,private location: Location,private router: Router) {

  }


  ngOnInit() {
    this.route.params.subscribe(
      params => {
        let title = params['title'];
        if (title) this.editMovie(title);
      });
  }
  back() {
    this.location.back();
  }


  addMovieToDB(){
    this.movie['title'] = this.title.nativeElement.value;
    this.movie['genres'] = this.genres.nativeElement.value;
    this.movie['duration'] = this.duration.nativeElement.value;
    this. movie['releaseDate'] = this.releaseDate.nativeElement.value;
    this.movie['originalTitle'] = this.originalTitle.nativeElement.value;
    this.movie['storyline'] = this.storyline.nativeElement.value;
    this.movie['imdbRating'] = this.imdbRating.nativeElement.value;
    this.movie['posterurl'] = this.posterurl.nativeElement.value;
    console.log(JSON.stringify(this.movie));
    localStorage.setItem(this.title.nativeElement.value, JSON.stringify(this.movie));
    /*alert("movie updated successfully");*/
    /*this.router.navigate(['/home']);*/

  }
  editMovie(title:string) {
    this.selectedMovie = this.moviesService.getDetails(title);
    this.title.nativeElement.value = this.selectedMovie.title;
    this.genres.nativeElement.value = this.selectedMovie.genres;
    this.duration.nativeElement.value = this.selectedMovie.duration;
    this.releaseDate.nativeElement.value = this.selectedMovie.releaseDate;
    this.originalTitle.nativeElement.value = this.selectedMovie.originalTitle;
    this.storyline.nativeElement.value = this.selectedMovie.storyline;
    this.imdbRating.nativeElement.value = this.selectedMovie.imdbRating;
    this.posterurl.nativeElement.value = this.selectedMovie.posterurl;
    this.addMovieToDB();
  }
  addMovie() {
    // tslint:disable-next-line:max-line-length
    if (this.title.nativeElement.value.length <= 0 || this.genres.nativeElement.value.length <= 0 || this.duration.nativeElement.value.length <= 0
      || this.releaseDate.nativeElement.value.length <= 0 || this.originalTitle.nativeElement.value.length <= 0 || this.storyline.nativeElement.value.length <= 0
      || this.imdbRating.nativeElement.value.length <= 0 || this.posterurl.nativeElement.value.length <= 0) {
      alert('Please enter all the fields');
    }
    else {
      this.addMovieToDB();
    }
  }
}
