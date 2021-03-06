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
    var searchMovieList = [];
    return this.http
      .get(this.jsonUrl)
      .map((res) => {
        for (let movie of res.json()) {
          if (movie.title.toLowerCase().includes(urlArray[5].toLowerCase()))
            searchMovieList.push(movie);
        }
        return searchMovieList;
      })
      .catch(this.handleError);
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
    return Observable.throw(errMsg);
  }
}
