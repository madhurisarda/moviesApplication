import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';
import { Observable }               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  private searchUrl = 'https://api.themoviedb.org/3/search/movie';
  private apiKey = '68b4fe2a513155a58dd0af4adacb281b';

  constructor (private http: Http) {
  }
  private jsonUrl = './assets/movies.json';

 /* const data = [
    {
      "name": "20t",
      "weight": ["1t", "2t", "3t", "4t", "5t"],
      "meters": ["7m", "8m", "9m", "10m", "12m", "14m", "16m", "18m"]
    },
    {
      "name": "25t",
      "weight": ["1t", "2t", "3t", "4t", "5t", "6t", "7t", "8t"],
      "meters": ["7m", "8m", "9m", "10m", "12m", "14m", "16m", "18m", "20m", "22m"]
    }
  ]
  //ow can I loop through my json data to find two specific key values e.g. weight = "8t" and meters = "7m" then return the name value of the object where these two values are found e.g. "25t".

  const result = data.filter(a => a.weight.find(w => w == "8t"))
    .filter(a => a.meters.find(m => m == "7m"))
    .map(a => a.name);
  console.log(result)*/

  searchMovies(query: string) {
    return this.http.get(this.jsonUrl)
      .map((res) => { return res.json().filter(movie => movie.title.find(title => title.contains(query)).map(movie => movie))})
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.results || { };
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
