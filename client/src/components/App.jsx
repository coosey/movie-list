import React from 'react';
import MovieList from './MovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>MoviesList</h1>
        <MovieList />
      </div>
    )
  }
}


export default App;