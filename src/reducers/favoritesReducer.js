import { TOGGLE_FAVORITES } from "../actions/favoritesActions.js";
import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions.js";
import movies from "../data.js";

const initialState = {
  favorites: [movies[0]],
  favoritesVisible: true,
  //   appTitle: "IMDB Movie Database",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return { ...state, favoritesVisible: !state.favoritesVisible };
    default:
      return state;
  }
};

export default reducer;
