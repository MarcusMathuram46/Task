class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
    
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  // Creating an instance of the Movie class
  const movieInstance = new Movie("Life of a programmer", "Marcus Productions", "Imdb-9");
  
  console.log(movieInstance);
  