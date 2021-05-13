import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addMovie, toggleFav } from '../actions/movieActions';

const MovieHeader = (props) => {
    const {appTitle, displayFavorites} = props;

    const clickHandler = () => {
        addMovie();
    }

    const favHandler = () => {
        props.toggleFav();
    }
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div onClick={favHandler} className="btn btn-sm btn-primary"><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" onClick={clickHandler} className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

const mapStateToProps = (state) => {
    return({
        appTitle: state.movie.appTitle,
        displayFavorites: state.favorites.displayFavorites
    })
}

export default connect(mapStateToProps, {addMovie, toggleFav})(MovieHeader);