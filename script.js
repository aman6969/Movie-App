const API_URL ='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key='
const form = document.getElementById('form')
const search = document.getElementById('search')
//Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url) 
    const data = await res.json()

    ShowMovies(data.results)
}
function ShowMovies(movies){
    async function getMovies(url){
        const res = await fetch(url)
        const data = await res.json()

        ShowMovies(data.results)
    }
    function ShowMovies(movies) {
        MediaDeviceInfo.innerHTML = ''

        movies.forEach((movie) => {
            const { title, poster_path, vote_average,
            overview } = movie

            const movieEl =document.createElement
            ('div')
            movieEl.classList.add('movie')

        movieEl.innerHTML = '
        <div class="movie">
           <img src="${IMG_PATH + poster_path}" alt="${title}">  
           <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassbyRate
            (vote_average)}">${vote_average}</span>
           </div>
           <div class="Overview">
           <h3>Overview</h3>
           ${overview}
         </div>
      </div>
        '

        main.appendChild(movieEl)
    })
}
 
function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    }else if(vote >= 5) {
        return 'orange'
    }else {
        return 'red'
    }
}    
}

form.addEventListener('submit', (e) => {
e.preventDefault()

const searchTeam = search.value

if(searchTerm && search.Term !== '') {
 getMovies(SEARCH_API + searchTerm)

 search.value = ''
}else {
    window.location.reload()
}
})
