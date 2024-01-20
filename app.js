// alert("Welcome 👋🏾");

const movie_ID = [
  458156, 182026, 272, 324857, 374720, 438631, 370172, 566525, 482373, 295693,
  961323, 661374, 848326,
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

let apiUrlBossBaby = `https://api.themoviedb.org/3/movie/${movie_ID[9]}?api_key=${apiKey}`;

let apiUrlNimona = `https://api.themoviedb.org/3/movie/${movie_ID[10]}?api_key=${apiKey}`;

let apiUrlGlassOnion = `https://api.themoviedb.org/3/movie/${movie_ID[11]}?api_key=${apiKey}`;

let apiUrlRebelMoon = `https://api.themoviedb.org/3/movie/${movie_ID[12]}?api_key=${apiKey}`;

const mainPoster = (response) => {
  document.querySelector("#main-poster").innerHTML =
    response.data.original_title;

  document.querySelector("#main-poster-overview").innerHTML =
    response.data.overview;
};
axios.get(apiUrlJohnWick).then(mainPoster);

const stMoviePoster = (response) => {
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

  let genreArray = response.data.genres;

  document.querySelector("#st-genre").innerHTML = genreArray.map((element) => {
    return element.name;
  });
};
axios.get(apiUrlStrangerThings).then(stMoviePoster);

const batmanMoviePoster = (response) => {
  let str = response.data.release_date;
  let [year, month, day] = str.split("-");

  document.querySelector(
    "#batman-production-country"
  ).innerHTML = `${response.data.production_countries[1].iso_3166_1}, ${year}`;

  document.querySelector("#batman-movie-title").innerHTML =
    response.data.original_title;

  document.querySelector(
    "#batman-poster"
  ).src = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;

  let genreArray = response.data.genres;

  document.querySelector("#batman-genre").innerHTML = genreArray.map(
    (element) => {
      return element.name;
    }
  );
};
axios.get(apiUrlBatMan).then(batmanMoviePoster);

const spidermanMoviePoster = (response) => {
  let str = response.data.release_date;
  let [year, month, day] = str.split("-");

  document.querySelector(
    "#spiderman-production-country"
  ).innerHTML = `${response.data.production_countries[0].iso_3166_1}, ${year}`;

  document.querySelector("#spiderman-movie-title").innerHTML =
    response.data.original_title;

  document.querySelector(
    "#spiderman-poster"
  ).src = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;
  console.log(response.data.release_date);

  let genreArray = response.data.genres;

  document.querySelector("#spiderman-genre").innerHTML = genreArray.map(
    (element) => {
      return element.name;
    }
  );
};
axios.get(apiUrlSpiderMan).then(spidermanMoviePoster);

const dunkirkMoviePoster = (response) => {
  let str = response.data.release_date;
  let [year, month, day] = str.split("-");

  document.querySelector(
    "#dunkirk-production-country"
  ).innerHTML = `${response.data.production_countries[0].iso_3166_1}, ${year}`;

  document.querySelector("#dunkirk-movie-title").innerHTML =
    response.data.original_title;

  document.querySelector(
    "#dunkirk-poster"
  ).src = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;
  console.log(response.data.release_date);

  let genreArray = response.data.genres;

  document.querySelector("#dunkirk-genre").innerHTML = genreArray.map(
    (element) => {
      return element.name;
    }
  );
};
axios.get(apiUrlDunkirk).then(dunkirkMoviePoster);

const duneMoviePoster = (response) => {
  let str = response.data.release_date;
  let [year, month, day] = str.split("-");

  document.querySelector(
    "#dune-production-country"
  ).innerHTML = `${response.data.production_countries[0].iso_3166_1}, ${year}`;

  document.querySelector("#dune-movie-title").innerHTML =
    response.data.original_title;

  document.querySelector(
    "#dune-poster"
  ).src = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;
  console.log(response.data.release_date);

  let genreArray = response.data.genres;

  document.querySelector("#dune-genre").innerHTML = genreArray.map(
    (element) => {
      return element.name;
    }
  );
};
axios.get(apiUrlDune).then(duneMoviePoster);

const noTimeMoviePoster = (response) => {
  let str = response.data.release_date;
  let [year, month, day] = str.split("-");

  document.querySelector(
    "#no-time-production-country"
  ).innerHTML = `${response.data.production_countries[0].iso_3166_1}, ${year}`;

  document.querySelector("#no-time-movie-title").innerHTML =
    response.data.original_title;

  document.querySelector(
    "#no-time-poster"
  ).src = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;
  console.log(response.data.release_date);

  let genreArray = response.data.genres;

  document.querySelector("#no-time-genre").innerHTML = genreArray.map(
    (element) => {
      return element.name;
    }
  );
};
axios.get(apiUrlNoTimeToDie).then(noTimeMoviePoster);

const shangChiMoviePoster = (response) => {
  let str = response.data.release_date;
  let [year, month, day] = str.split("-");

  document.querySelector(
    "#shang-chi-production-country"
  ).innerHTML = `${response.data.production_countries[0].iso_3166_1}, ${year}`;

  document.querySelector("#shang-chi-movie-title").innerHTML =
    response.data.original_title;

  document.querySelector(
    "#shang-chi-poster"
  ).src = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;
  console.log(response.data.release_date);

  let genreArray = response.data.genres;

  document.querySelector("#shang-chi-genre").innerHTML = genreArray.map(
    (element) => {
      return element.name;
    }
  );
};
axios.get(apiUrlShangChi).then(shangChiMoviePoster);

const dontBreatheMoviePoster = (response) => {
  let str = response.data.release_date;
  let [year, month, day] = str.split("-");

  document.querySelector(
    "#dont-breathe-production-country"
  ).innerHTML = `${response.data.production_countries[0].iso_3166_1}, ${year}`;

  document.querySelector("#dont-breathe-movie-title").innerHTML =
    response.data.original_title;

  document.querySelector(
    "#dont-breathe-poster"
  ).src = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;
  console.log(response.data.release_date);

  let genreArray = response.data.genres;

  document.querySelector("#dont-breathe-genre").innerHTML = genreArray.map(
    (element) => {
      return element.name;
    }
  );
};
axios.get(apiUrlDontBreathe).then(dontBreatheMoviePoster);

const bossBabyMoviePoster = (response) => {
  let str = response.data.release_date;
  let [year, month, day] = str.split("-");

  document.querySelector(
    "#boss-baby-production-country"
  ).innerHTML = `${response.data.production_countries[0].iso_3166_1}, ${year}`;

  document.querySelector("#boss-baby-movie-title").innerHTML =
    response.data.original_title;

  document.querySelector(
    "#boss-baby-poster"
  ).src = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;
  console.log(response.data.release_date);

  let genreArray = response.data.genres;

  document.querySelector("#boss-baby-genre").innerHTML = genreArray.map(
    (element) => {
      return element.name;
    }
  );
};
axios.get(apiUrlBossBaby).then(bossBabyMoviePoster);

const nimonaMoviePoster = (response) => {
  let str = response.data.release_date;
  let [year, month, day] = str.split("-");

  document.querySelector(
    "#nimona-production-country"
  ).innerHTML = `${response.data.production_countries[0].iso_3166_1}, ${year}`;

  document.querySelector("#nimona-movie-title").innerHTML =
    response.data.original_title;

  document.querySelector(
    "#nimona-poster"
  ).src = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;

  let genreArray = response.data.genres;

  document.querySelector("#nimona-genre").innerHTML = genreArray.map(
    (element) => {
      return element.name;
    }
  );
};
axios.get(apiUrlNimona).then(nimonaMoviePoster);

const glassOnionMoviePoster = (response) => {
  let str = response.data.release_date;
  let [year, month, day] = str.split("-");

  document.querySelector(
    "#glass-onion-production-country"
  ).innerHTML = `${response.data.production_countries[0].iso_3166_1}, ${year}`;

  document.querySelector("#glass-onion-movie-title").innerHTML =
    response.data.original_title;

  document.querySelector(
    "#glass-onion-poster"
  ).src = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;

  let genreArray = response.data.genres;

  document.querySelector("#glass-onion-genre").innerHTML = genreArray.map(
    (element) => {
      return element.name;
    }
  );
};
axios.get(apiUrlGlassOnion).then(glassOnionMoviePoster);

const rebelMoonMoviePoster = (response) => {
  let str = response.data.release_date;
  let [year, month, day] = str.split("-");

  document.querySelector(
    "#rebel-moon-production-country"
  ).innerHTML = `${response.data.production_countries[0].iso_3166_1}, ${year}`;

  document.querySelector("#rebel-moon-movie-title").innerHTML =
    response.data.original_title;

  document.querySelector(
    "#rebel-moon-poster"
  ).src = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;

  let genreArray = response.data.genres;

  document.querySelector("#rebel-moon-genre").innerHTML = genreArray.map(
    (element) => {
      return element.name;
    }
  );
};
axios.get(apiUrlRebelMoon).then(rebelMoonMoviePoster);
