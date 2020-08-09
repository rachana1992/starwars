import * as axios from 'axios';

export const REQUEST_CHARS = 'REQUEST_CHARS';
export const REQUEST_FILM = 'REQUEST_POSTS';
export const LOAD_DATA_START = 'LOAD_DATA_START';
export const LOAD_DATA_COMPLETED = 'LOAD_DATA_COMPLETED';
export const CHANGE_CHAR = 'CHANGE_CHAR';
export const CHANGE_LAST_MOVIE = 'CHANGE_LAST_MOVIE';

export const requestChars = (chars,films) => ({
  type: REQUEST_CHARS,
  payload:{
      chars: chars,
      films: films
  }
});
export const loadDataStart = () => ({
  type: LOAD_DATA_START,
});
export const loadDataComplete = () => ({
  type: LOAD_DATA_COMPLETED,
});
export const requestFilm = () => ({
  type: REQUEST_FILM,
});
export const changeChar = (data,films) => ({
    type: CHANGE_CHAR,
    payload: {
        data: data,
        films: films
    }
  });
export const changeMovie = (films) => ({
    type: CHANGE_LAST_MOVIE,
    payload: {
        movie: films
    }
  });
  

export function fetchCharacters() {
  return function (dispatch) {
    dispatch(loadDataStart());
    return axios.get('http://swapi.dev/api/people')
    //   .then(
    //     (response) => response.json(),
    //     (error) => console.log("An error occurred.", error)
    //   )
      .then((json) => {
        dispatch(loadDataComplete());
        dispatch(requestChars(json.data.results,json.data.results[0].films));
        dispatch(fetchFilmById(json.data.results[0].films.length-1));
      });
  };
}

export function fetchCharactersById(id) {
    return function (dispatch) {
      dispatch(loadDataStart());
      return axios.get(`http://swapi.dev/api/people/${id}/`)
        // .then(
        //   (response) => response.json(),
        //   (error) => console.log("An error occurred.", error)
        // )
        .then((json) => {
          if(json === undefined)
            return
          dispatch(changeChar(json.data, json.data.films));
          dispatch(loadDataComplete());
          dispatch(fetchFilmById(json.data.films.length-1));

        },err=>{
          dispatch(changeChar([], {}));
          dispatch(loadDataComplete());
          dispatch(changeMovie({}))
        });
    };
  }

  export function fetchFilmById(id) {
    return function (dispatch) {
      dispatch(loadDataStart());
      return axios.get(`http://swapi.dev/api/films/${id}/`)
        // .then(
        //   (response) => response.json(),
        //   (error) => console.log("An error occurred.", error)
        // )
        .then((json) => {
          dispatch(changeMovie(json.data))
          dispatch(loadDataComplete());
        },err=>{
          dispatch(changeMovie({}))
          dispatch(loadDataComplete());
        });
    };
  }
