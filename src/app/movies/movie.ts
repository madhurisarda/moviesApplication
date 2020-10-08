export class Movie {
  constructor(
    public id : number,
    public title : string,
    public year : string,
    public genres : string,
    public posterurl : string,
    public releaseDate : string,
    public imdbRating : number,
    public userInput : any[],
    public storyline : string) { }
}
// tslint:disable-next-line:class-name
class userInput {
  constructor(
    public user : string,
    public comment : string,
    public rating : string,
  ) { }
}
