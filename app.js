const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f89249349d8ec692593d42a690cfe2f4&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=f89249349d8ec692593d42a690cfe2f4&query=';

const main = document.querySelector(".main");
const search = document.getElementById("search");
const searchBtn = document.querySelector('.searchBtn');
const form = document.getElementsByTagName("form");
getMovieDetails(API_URL);

async function getMovieDetails(url){
     const  res = await fetch(url);
     const data = await res.json();
    // console.log(data.results)
    showMovies(data.results);
}

function showMovies(movies){
   main.innerHTML = '';

   movies.forEach(movie => {
       const title = movie.title;
       const poster = movie.poster_path;
       const overview = movie.overview;
       const voteAvg = movie.vote_average;
    //    let arr = {title,poster,overview,voteAvg};
       const movieEl= document.createElement("div");
       movieEl.classList.add("movieCard");
       movieEl.innerHTML = `
       <img src="${IMG_PATH + poster}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
             <span class="${chooseColor(voteAvg)}">${voteAvg}</span>
            </div>
            <div class="overview">
                <h3>overview</h3>
            ${overview}
            </div>`
       main.appendChild(movieEl);
   });
   console.log(movies);

}

searchBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm !== ""){
        console.log(searchTerm);
        showMovies(SEARCH_API + searchTerm);
        search.value = "";
    }else{
        console.log("no");
    }
})

function chooseColor(vote){
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

