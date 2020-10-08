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
  language: string;
  index: number;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.language = this.moviesService.getLanguage();
    this.route.params.subscribe(
      params => {
        console.log(params['title']);
        let index = params['title'];
        if (index) this.getDetails(index);
      });
  }

  getDetails(index: number) {
    this.index= index;
    this.moviesService.getDetails(index)
      .subscribe(
        response => this.selectedMovie = response,
        error => this.errorMessage = <any>error);
  }

  back() {
    this.location.back();
  }
  addComment(comment, rating){
/*    getData(): this.http.get(this.jsonUrl)
      .map((res) =>
{ return res.json()[index]})*/
/*console.log(this.index+ "hey");*/
console.log(comment.value);

    /*this.moviesService.getDetails(this.index)
      .subscribe( selectedMovie => {
        this.selectedMovie.comments.user = "maddy";
        this.selectedMovie.comments.comment = comment;
      });*/

    /*response.username.value = firstJsonObj.user;
    response.comment.value = firstJsonObj.comment;*/
  }
}
