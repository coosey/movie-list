import React from 'react';

function MovieList() {
    const movies = [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
    ];
    const movieList = movies.map(movie => <li key={movie.title}>{movie.title}</li>)
    return <div>{movieList}</div>
    
}

export default MovieList;