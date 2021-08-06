const numberOfFilms = prompt("Сколько фильмов посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из поледних просмотренный фильмов", "");
const b = prompt("На сколько оцените его?", "");
const c = prompt("Один из поледних просмотренный фильмов", "");
const d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d






console.log(personalMovieDB);
