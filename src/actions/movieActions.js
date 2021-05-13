export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const ADD_FAV = "ADD_FAV";
export const TOGGLE_FAV = "TOGGLE_FAV";
export const DELETE_FAV = "DELETE_FAV";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (newMovie)=>{
    return({type: ADD_MOVIE, payload: {...newMovie} })
}

export const addFav = (newFav)=>{
    return({type: ADD_FAV, payload: {...newFav}})
}

export function toggleFav() {
    return {type: TOGGLE_FAV}
}

export const deleteFav = (id) => {
    return({type: DELETE_FAV, payload:id})
}