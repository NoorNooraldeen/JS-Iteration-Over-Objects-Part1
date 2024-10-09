/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/

/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/

/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/

const person = {
  name: "sara",
  age: 22,
  city: "kuwait",
};
console.log(person);

person.email = "sara123@gmail.com";
console.log(person);

function hasKey(obj, key) {
  return Boolean(obj[key]);
}
console.log(hasKey({ name: "John", age: 25 }, "name"));
console.log(hasKey({ name: "John", age: 25 }, "city"));

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];
/******************************
      Q4) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to print the titles of all the movies.
  ********************************/

/******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/

function movieTitles(movies) {
  movies.forEach((movie) => {
    console.log("movie title:", movie.title);
  });
}

movieTitles(movies);

function moviesYear(movies) {
  return movies.filter((movie) => movie.year === 1994).length;
}
console.log(moviesYear(movies));

/******************************
      Q6) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/
function updTheGerne(movies) {
  const movie = movies.find((movie) => movie.title === "The Dark Knight");
  if (movie) {
    movie.genre = "Action/Drama";
  }
  return movies;
}
const updatedMovies = updTheGerne(movies);
console.log("Updated Movies", updatedMovies);

//console.log(updTheGerne(movies));
