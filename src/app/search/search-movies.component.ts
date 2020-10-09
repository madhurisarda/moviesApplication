import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SearchService } from "./search.service";
import { MoviesService } from "../movies/movies.service";
import { Movie } from "../movies/movie";
import { Search } from "../movies/search";

@Component({
  selector: "app-search-movies",
  templateUrl: "search-movies.component.html",
  styleUrls: ["search-movies.component.css"],
})
export class SearchMoviesComponent implements OnInit {
  searches: Search;
  movies: Movie[];
  total_results: number;
  total_pages: number;
  page: number;
  query: string;
  sort: number;

  constructor(
    private searchService: SearchService,
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.searchMovies(this.query);
    });
  }

  searchMovies(query: string) {
    this.searchService.searchMovies(query).subscribe(
      (response) => {
        this.searches = response;
        this.movies = response;
        this.total_results = response.length;
        this.query = window.location.href.split("/")[5];
      },
      (error) => console.error(error)
    );
  }

  dynamicSort(property) {
    let sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      let result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  sortMovies(property: string) {
    if (property == "title") {
      if (this.sort == 1) {
        this.movies.sort(this.dynamicSort("-title"));
        this.sort = -1;
      } else {
        this.movies.sort(this.dynamicSort("title"));
        this.sort = 1;
      }
    }
  }

  goPage(go: number) {
    this.searchMovies(this.query);
  }

  /*onSelect(movie: Movie) {
    this.router.navigate(['./../movie', movie.id]);
  }*/
}
