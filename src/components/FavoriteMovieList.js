import React from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { addMovie, deleteFav } from '../actions/movieActions';

const FavoriteMovieList = (props) => {
    const favorites = [...props.favorites];
    console.log(favorites);

    const handleClick = (e) => {
        console.log(e);
        props.deleteFav(e);
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {props.displayFavorites ? 
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={() => {handleClick(movie.id)}}class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
            :
            <div></div>
        }
    </div>);
}

const mapStateToProps = (state) => {
    return({
        favorites: state.favorites.favorites,
        displayFavorites: state.favorites.displayFavorites
    })
}

export default connect(mapStateToProps, {addMovie, deleteFav})(FavoriteMovieList);