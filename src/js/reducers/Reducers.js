import * as actions from "../actions/Actions";
const initialState = {
  loading: false,
  chars: [],
  selectedChar: {},
  filmLists: [],
  lastFilmDetails: {},
};

const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.REQUEST_CHARS:
      return {
        ...state,
        chars: action.payload.chars,
        selectedChar: action.payload.chars[0],
        filmLists: action.payload.films,
      };
    case actions.REQUEST_FILM:
      return { ...state, lastFilmDetails: action.filmDetail };
    case actions.LOAD_DATA_COMPLETED:
      return { ...state, loading: false };
    case actions.LOAD_DATA_START:
      return { ...state, loading: true };
    case actions.CHANGE_CHAR:
      return { ...state, selectedChar: action.payload.data , filmLists: action.payload.films};
    case actions.CHANGE_LAST_MOVIE:
      return { ...state, lastFilmDetails: action.payload.movie };
    default:
      return { ...state };
  }
};

export default rootReducers;
