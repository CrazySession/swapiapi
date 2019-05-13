import React from 'react';

import axios from 'axios';

import DataList from './DataList';


class SearchBar extends React.Component{
    state = {selectedOption: 'films', result : [] };

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.selectedOption);
        this.getUser(this.state.selectedOption);
    };

    getUser = async (term) => {
        try {
            const response = await axios.get('https://swapi.co/api/' + term);
            console.log(response.data.results);
            this.setState({ result : response.data.results});
        } catch (error) {
            console.error(error);
        }
    };

    render(){
    return (
        <div className="ui form">
            <form onSubmit={this.onFormSubmit}>
                <p>May the force be with you!</p>
                <fieldset>
                    {/*<legend>May the force be with you!</legend>*/}
                    <input  id="fm" type="radio" name="choice" defaultChecked="defaultChecked"
                            value="films"
                            onChange={ (e) => { this.setState({selectedOption : e.target.value})} }/>
                    <label htmlFor="fm">Films</label>
                    <input  id="pl" type="radio" name="choice"
                            value="people/"
                            onChange={ (e) => { this.setState({selectedOption : e.target.value})} }/>
                    <label htmlFor="pl">People</label>
                    <input  id="pla" type="radio" name="choice"
                            value="planets"
                            onChange={ (e) => { this.setState({selectedOption : e.target.value})} }/>
                    <label htmlFor="pla">Planets</label>

                    <br />

                    <input  id="sp" type="radio" name="choice"
                            value="species"
                            onChange={ (e) => { this.setState({selectedOption : e.target.value})} }/>
                    <label htmlFor="sp">Species</label>
                    <input  id="st" type="radio" name="choice"
                            value="starships"
                            onChange={ (e) => { this.setState({selectedOption : e.target.value})} }/>
                    <label htmlFor="st">Starships</label>
                    <input  id="ve" type="radio" name="choice"
                            value="vehicles"
                            onChange={ (e) => { this.setState({selectedOption : e.target.value})} }/>
                    <label htmlFor="ve">Vehicles</label>
                </fieldset>
                <button className="ui primary button">Chose</button>
            </form>
            <DataList   results={this.state.result}/>
        </div>
    )
}}

export default SearchBar