import React from 'react';

import Top from './Header';
import Searchbar from './SearchBar';
import DataList from './DataList';

const App = () => {
    return (
            <div className="ui container">
                <Top        />
                <Searchbar  />
                <DataList   />
            </div>
    )
};

export default App

// #TODO Major - show DataList with map
// #TODO Major - Switch from Seaarchbar to checkboxes/radioButtons
// #TODO Major - Add and initialize DetailCards

// #TODO minor - Add impressum


/*

    ### Programm Structure ###

    Header

    SearchBar ---> later Checkboxes/RadioButtons

    DataOverview
    DetailCard - swapping with DataOverview

    Impressum

*/
