import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';
import { Observable }               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Movie } from './movie';

@Injectable()
export class MoviesService {
  username: string;
 // username = localStorage.getItem("name");
  constructor (private http: Http) {

  }
  private jsonUrl = './assets/movies.json';
  getMovies() {
    var values =[];
      var keys = Object.keys(localStorage);
      var i = keys.length;
    console.log(keys.length);
    while ( i > 2 ) {
      values.push(JSON.parse(localStorage.getItem(keys[i-1])));
      i--;
    }
    console.log(values);
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
    var name ="name";
    var selectedMovie = JSON.parse(localStorage.getItem(title));
    selectedMovie['userInput'] = [];
    selectedMovie['userInput'].push("{\"user\":"+localStorage.getItem(name)+",\"comment\":"+comment+",\"rating\":"+rating+"}");
    localStorage.setItem(title, JSON.stringify(selectedMovie));
  }
}
