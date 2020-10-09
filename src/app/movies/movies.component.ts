import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MoviesService } from './movies.service';
import { Movie } from './movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  movies: any[];
  moviesList: any[];


  constructor(
    private moviesService: MoviesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMovies();
    this.initializeMovies();


  }
  initializeMovies() {
    this.moviesService.getJSON().subscribe((data) => {
      this.moviesList = data.json();
      for (let movie of this.moviesList) {
        localStorage.setItem(movie.title, JSON.stringify(movie));
      }
    });
  }


  getMovies() {
    this.movies = this.moviesService.getMovies();
  }

  deleteMovie(title : string) {
    localStorage.removeItem(title);
    /*var movieDetails =  JSON.parse(localStorage.getItem(title));
    movieDetails.*/
  }
  editMovie(title : string) {
    return JSON.parse(localStorage.getItem(title));
   // this.router.navigate(['/addEdit']);
    //localStorage.removeItem(title);
    /*var movieDetails =  JSON.parse(localStorage.getItem(title));
    movieDetails.*/
  }
  /*onSelect(movie: Movie) {
    this.router.navigate(['./../movie', movie.id]);
  }*/
}
