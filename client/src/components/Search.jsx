import React from 'react';

const Search = (props) => {
    
    return (
        <div className="search-bar form-inline">
            <form className="form">
                <input 
                className="search" 
                type="text" 
                placeholder="Search..."
                />
                <button className="btn" >
                    <span className="glyphicon glyphicon-search">Go!</span>
                </button>
            </form>
        </div>
    )
}

export default Search;