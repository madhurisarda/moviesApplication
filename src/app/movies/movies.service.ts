import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';
import { Observable }               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Movie } from './movie';

@Injectable()
export class MoviesService {
  //private url = 'https://api.themoviedb.org/3/movie/';
  //private searchUrl = 'https://api.themoviedb.org/3/search/movie';
 // private apiKey = '68b4fe2a513155a58dd0af4adacb281b';
  private language;
  private _jsonURL = 'assets/movies.json';
  id : number;
  constructor (private http: Http) {
    if (localStorage.getItem('lang') == 'pl') this.language = 'pl';
    else this.language = 'en';
  }
  private jsonUrl = './assets/movies.json';
  getMovies(): Observable<Movie[]> {
    return this.http.get(this.jsonUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }


  getDetails(index : number) {
    return this.http.get(this.jsonUrl)
      .map((res) => { return res.json()[index]})
      .catch(this.handleError);
  }

  extractData(res: Response) {
      let body = res.json();
      // return just the response, or an empty array if there's no data
      return body || [];
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

  changeLanguage(lang: string) {
    localStorage.setItem('lang', lang);
    this.language = lang;
  }

  getLanguage() {
    return this.language;
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
}
