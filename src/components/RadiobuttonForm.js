import React from 'react';
import axios from 'axios';

import DataList from './DataList';

import '../css/radioButtonForm.css';


class SearchBar extends React.Component{
    state = {selectedOption: '',tempOption :'', result : [], loaded : true};

    componentDidUpdate(){
        console.log(this.state.loaded);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.getUser(this.state.selectedOption);
    };

    getUser = async (term) => {
        try {
            const response = await axios.get('https://swapi.co/api/' + term);
            this.setState({ result : response.data.results});
            this.setState({ loaded : true });
        } catch (error) {
            console.error(error);
        }
    };

    render(){
    return (
        <div className="ui form">
            <form onSubmit={this.onFormSubmit}>
                <h1>May the force be with you!</h1>
                <fieldset>
                    {/*<legend>May the force be with you!</legend>*/}
                    <input  id="fm" type="radio" name="choice" defaultChecked="defaultChecked"
                            value="films"
                            onChange={(e) => { this.setState({tempOption : e.target.value})}}
                            /*onChange={ (e) => { this.setState({selectedOption : e.target.value})} }*//>
                    <label htmlFor="fm">Films</label>
                    <input  id="pl" type="radio" name="choice"
                            value="people/"
                            onChange={(e) => { this.setState({tempOption : e.target.value})}}
                            /*onChange={ (e) => { this.setState({selectedOption : e.target.value})} }*//>
                    <label htmlFor="pl">People</label>
                    <input  id="pla" type="radio" name="choice"
                            value="planets"
                            onChange={(e) => { this.setState({tempOption : e.target.value})}}
                            /*onChange={ (e) => { this.setState({selectedOption : e.target.value})} }*//>
                    <label htmlFor="pla">Planets</label>

                    <br />

                    <input  id="sp" type="radio" name="choice"
                            value="species"
                            onChange={(e) => { this.setState({tempOption : e.target.value})}}
                            /*onChange={ (e) => { this.setState({selectedOption : e.target.value})} }*//>
                    <label htmlFor="sp">Species</label>
                    <input  id="st" type="radio" name="choice"
                            value="starships"
                            onChange={(e) => { this.setState({tempOption : e.target.value})}}
                            /*onChange={ (e) => { this.setState({selectedOption : e.target.value})} }*//>
                    <label htmlFor="st">Starships</label>
                    <input  id="ve" type="radio" name="choice"
                            value="vehicles"
                            onChange={(e) => { this.setState({tempOption : e.target.value})}}
                            /*onChange={ (e) => { this.setState({selectedOption : e.target.value})} }*//>
                    <label htmlFor="ve">Vehicles</label>
                </fieldset>
                <button onClick={(e) => {this.setState({ selectedOption : this.state.tempOption }); this.setState({ loaded : false})}} className="ui primary button">Chose</button>
            </form>
            { this.state.loaded === true ? <div></div> : <div className="ui text loader active">Loading</div>}
            <DataList   results={this.state.result} selectedOption={this.state.selectedOption} />
        </div>
    )
}}

export default SearchBar