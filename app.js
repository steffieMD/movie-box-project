// alert("Welcome 👋🏾");
// let apiMovieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
// let apiGenreList = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`

const movie_ID = [
  458156, 182026, 272, 324857, 374720, 438631, 370172, 566525, 482373,
];

const apiKey = "ea37b7f465b1fe812606a1703fea8272";

let apiUrlJohnWick = `https://api.themoviedb.org/3/movie/${movie_ID[0]}?api_key=${apiKey}`;
let apiUrlStrangerThings = `https://api.themoviedb.org/3/movie/${movie_ID[1]}?api_key=${apiKey}`;

let apiUrlBatMan = `https://api.themoviedb.org/3/movie/${movie_ID[2]}?api_key=${apiKey}`;
let apiUrlSpiderMan = `https://api.themoviedb.org/3/movie/${movie_ID[3]}?api_key=${apiKey}`;
let apiUrlDunkirk = `https://api.themoviedb.org/3/movie/${movie_ID[4]}?api_key=${apiKey}`;
let apiUrlDune = `https://api.themoviedb.org/3/movie/${movie_ID[5]}?api_key=${apiKey}`;
let apiUrlNoTimeToDie = `https://api.themoviedb.org/3/movie/${movie_ID[6]}?api_key=${apiKey}`;
let apiUrlShangChi = `https://api.themoviedb.org/3/movie/${movie_ID[7]}?api_key=${apiKey}`;
let apiUrlDontBreathe = `https://api.themoviedb.org/3/movie/${movie_ID[8]}?api_key=${apiKey}`;

const mainPoster = (response) => {
  document.querySelector("#main-poster").innerHTML =
    response.data.original_title;

  document.querySelector("#main-poster-overview").innerHTML =
    response.data.overview;
};

const moviePoster = (response) => {
  let str = response.data.release_date;
  let [year, month, day] = str.split("-");

  document.querySelector(
    "#st-production-country"
  ).innerHTML = `${response.data.production_countries[0].iso_3166_1}, ${year}`;

  document.querySelector("#st-movie-title").innerHTML =
    response.data.original_title;

  document.querySelector(
    "#st-poster"
  ).src = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;
  console.log(response.data.release_date);

  document.querySelector("#st-genre").innerHTML = response.data.genres[0].name;

  console.log(response.data.genres[0].name);
};

axios.get(apiUrlJohnWick).then(mainPoster);
axios.get(apiUrlStrangerThings).then(moviePoster);
// axios.get(apiUrlBatMan).then(moviePoster);
// axios.get(apiUrlSpiderMan).then(moviePoster);
// axios.get(apiUrlDunkirk).then(moviePoster);
// axios.get(apiUrlDune).then(moviePoster);
// axios.get(apiUrlNoTimeToDie).then(moviePoster);
// axios.get(apiUrlShangChi).then(moviePoster);
// axios.get(apiUrlDontBreathe).then(moviePoster);
