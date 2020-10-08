import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies/movies.service';
import { Movie } from '../movies/movie';
import {Location} from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  selectedMovie: Movie;
  errorMessage: string;
  index: number;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        console.log(params['title']);
        let title = params['title'];
        if (title) this.getDetails(title);
      });
  }

  getDetails(title: string) {
    this.selectedMovie = this.moviesService.getDetails(title);
  }

  back() {
    this.location.back();
  }
  addComment(comment, rating){
    this.moviesService.setComment(this.selectedMovie.title,comment,rating);
    console.log(comment.value);
  }
}
