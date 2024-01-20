// alert("Welcome 👋🏾");
// let apiMovieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
// let apiGenreList = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`

const movie_ID = [
  458156, 182026, 272, 324857, 374720, 438631, 370172, 566525, 482373,
];

const apiKey = "ea37b7f465b1fe812606a1703fea8272";

let apiUrlJohnWick = `https://api.themoviedb.org/3/movie/${movie_ID[0]}?api_key=${apiKey}`;

let apiUrlStrangerThings = `https://api.themoviedb.org/3/movie/${movie_ID[1]}?api_key=${apiKey}`;

const mainPoster = (response) => {
  console.log(response.data.overview);

  document.querySelector("#main-poster").innerHTML =
    response.data.original_title;

  document.querySelector("#main-poster-overview").innerHTML =
    response.data.overview;

  //   console.log(apple);
};
axios.get(apiUrlJohnWick).then(mainPoster);
// axios.get(apiUrlStrangerThings).then();
