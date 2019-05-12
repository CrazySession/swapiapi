import React from 'react';

import Top from './Header';
import SearchBar from './SearchBar';
import DataList from './DataList';

const App = () => {
    return (
            <div className="ui container">
                <Top        />
                <SearchBar  />
                <DataList   />
            </div>
    )
};

export default App

// #TODO MAJOR  - show DataList with map
// #TODO MAJOR  - Switch from Seaarchbar to checkboxes/radioButtons
// #TODO MAJOR  - Add and initialize DetailCards

// #TODO Medium - SearchBar on top of DataOverview to search for names with help of regEX

// #TODO minor  - Add impressum


/*

    ### Programm Structure ###

    Header

    SearchBar ---> later Checkboxes/RadioButtons

    DataOverview
    DetailCard - swapping with DataOverview

    Impressum

*/
