import React from 'react';
import AddMovieList from './AddMovieList.jsx';
//import Search from './Search.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="title">
          <h1>Movie List</h1>  
        </div>
        <AddMovieList />
        {/* <Search /> */}
      </div>
    )
  }
}


export default App;
