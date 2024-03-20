import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITES,
} from "../actions/favoritesActions.js";
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
    case ADD_FAVORITE:
      const isExisting = state.favorites.find(
        (movie) => movie.id === action.payload.id
      );
      if (isExisting) {
        return state;
      }
      const newState = {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };
      return newState;
    case REMOVE_FAVORITE:
      const newFavorites = state.favorites.filter(
        (movie) => movie.id !== action.payload
      );
      return { ...state, favorites: newFavorites };
    default:
      return state;
  }
};

export default reducer;
