import React from 'react';

import axios from 'axios';


class SearchBar extends React.Component{
    state = {searchEntry: ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.searchEntry);
        this.getUser(this.state.searchEntry);
    };

    getUser = async (term) => {
        try {
            const response = await axios.get('https://swapi.co/api/' + term + '/');
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    render(){
    return (
        <div className="ui form">
            <form onSubmit={this.onFormSubmit} className="field">
                <label>May the force be with you!</label>
                <input type="text"
                       value={this.state.searchEntry}
                       onChange={(e) => { this.setState({searchEntry : e.target.value})} }
                       placeholder="Enter your search here" />
            </form>
        </div>
    )
}}

export default SearchBar