import {Injectable, OnInit} from '@angular/core';
import { Http, Response }           from '@angular/http';
import { Observable }               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Movie } from './movie';

@Injectable()
export class MoviesService{
  constructor (private http: Http) {
    this.getJSON().subscribe((data) => {
    });
  }
  userInput = {};
  public getJSON(): Observable<any> {
    return this.http.get('./assets/movies.json');
  }




    /*return this.http.get(this.jsonUrl)
         .map((res) => { return res.json()})
        .catch(this.handleError);
  }*/


  private jsonUrl = './assets/movies.json';
  getMovies() {
    var values = [];
    var keys = Object.keys(localStorage);
    var i = keys.length;
    while (i > 0) {
      if (keys[i - 1] == "name" || keys[i - 1] == "password") {
      } else {
        values.push(JSON.parse(localStorage.getItem(keys[i - 1])));
      }
      i--;
    }
    return values;
  }



  getDetails(title : string) {
    return JSON.parse(localStorage.getItem(title));
  }

  searchMovies(query: string) {
    //let searchUrl = `${this.searchUrl}?api_key=${this.apiKey}&language=${this.language}&query=${query}`;

  /*.filter(a => a.weight.find(w => w == "8t"))
      .filter(a => a.meters.find(m => m == "7m"))
      .map(a => a.name);*/

    return this.http.get(this.jsonUrl)
      .map((res) => { return res.json().filter(movie => movie.title.find(title => title.contains(query)).map(movie => movie))})
      .catch(this.handleError);

    /*return this.http.get(this.jsonUrl)
      .map((res) => { return res.json()})
      .catch(this.handleError);*/
  }


  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  setComment(title: string, comment: string, rating: string) {
    var selectedMovie = JSON.parse(localStorage.getItem(title));
    this.userInput['user'] = localStorage.getItem('name');
    this.userInput['comment'] = comment;
    this.userInput['rating'] = rating;
    selectedMovie['userInput'] = this.userInput;
    localStorage.setItem(title, JSON.stringify(selectedMovie));
  }
}
