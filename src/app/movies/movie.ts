export class Movie {
  constructor(
    public title : string,
    public duration : string,
    public originalTitle : string,
    public genres : string,
    public posterurl : string,
    public releaseDate : string,
    public imdbRating : number,
    public userInput : userInput[],
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
