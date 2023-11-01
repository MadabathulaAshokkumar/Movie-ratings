const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f89249349d8ec692593d42a690cfe2f4&page=1";

const img = document.querySelector(".img");
getMovieDetails(API_URL);

async function getMovieDetails(url){
     const  res = await fetch(url);
     const data = await res.json();
    //  const arr = data.results;
    //  console.log(data.results[0].backdrop_path);
    // img.style.backgroud = `url(${data.results[0].backdrop_path})` ;
}
