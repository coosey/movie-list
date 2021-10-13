import React from 'react';
import AddMovieForm from './AddMovieForm.jsx';

class AddMovieList extends React.Component {
    // create a state for movies as an empty array
    state = {
        movies: []
    }
    // create addToList function that pushes in movie as first index followed by previous movies
    addToList = (movie) => {
        this.setState({
            movies: [movie, ...this.state.movies]
        })
    }
    render() {
        return (
            <div>
                <AddMovieForm onSubmit={this.addToList}/>
                {this.state.movies.map(movie => (
                    <ul key={movie.text}> {movie.text}</ul>
                ))}
            </div>
        )
    }
}

export default AddMovieList;