import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addMovie } from '../actions/movieActions';

const MovieHeader = (props) => {
    const {appTitle} = props;
    const displayFavorites = true;

    const clickHandler = () => {
        addMovie();
    }
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div className="btn btn-sm btn-primary"><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" onClick={clickHandler} className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

const mapStateToProps = (state) => {
    return({
        appTitle: state.appTitle
    })
}

export default connect(mapStateToProps, {addMovie})(MovieHeader);