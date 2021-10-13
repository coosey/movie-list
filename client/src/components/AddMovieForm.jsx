import React from 'react';

export default class AddMovieForm extends React.Component {
            // store what user types
            state = {
                text: ""
            };
    // create a handleChange function
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    // create a handleSubmit function
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({
            text: this.state.text,
            complete: false
        });
        // reset state to empty search after typing
        this.setState({
            text: ""
        })
    }
    render() {
        return (
            <div className="movie-bar form-inline">
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text"
                    name="text" 
                    value = {this.state.text}
                    onChange={this.handleChange}
                    placeholder="Add a movie title here"
                    />
                    <button className="movieBtn" onClick={this.handleSubmit}>
                        <span className="glyphicon glyphicon-search">Add</span>
                    </button>
                </form>
            </div>
        )
    }
}