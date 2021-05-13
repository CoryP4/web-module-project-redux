import { ADD_FAV, TOGGLE_FAV, DELETE_FAV } from '../actions/movieActions.js';

const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAV:
            return {
                ...state,
                favorites: [...state.favorites, {...action.payload, id: state.favorites.length}]
            }
        case TOGGLE_FAV:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case DELETE_FAV:
            return {
                ...state,
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
        default:
            return state;
    }
}

export default favoritesReducer