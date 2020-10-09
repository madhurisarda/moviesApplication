import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Injectable()
export class SearchService {
  constructor(private http: Http) {}
  private jsonUrl = "./assets/movies.json";

  searchMovies(query: string) {
    var url = window.location.href;
    var urlArray = url.split("/");
    console.log(urlArray[5]);
    var searchMovieList = [];
    return this.http
      .get(this.jsonUrl)
      .map((res) => {
        console.log(res.json());
        for (let movie of res.json()) {
          if (movie.title.toLowerCase().includes(urlArray[5].toLowerCase()))
            searchMovieList.push(movie);
        }

        console.log(searchMovieList);
        return searchMovieList;
      })
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.results || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || "";
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
