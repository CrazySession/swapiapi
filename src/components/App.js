import React from 'react';

import Top from './Header';
import SearchBar from './RadiobuttonForm';

const App = () => {
    return (
            <div className="ui container">
                <Top        />
                <SearchBar  />
            </div>
    )
};

export default App

// MAJOR  - show DataList with map -- DONE
// MAJOR  - Switch from Seaarchbar to checkboxes/radioButtons -- DONE
// #TODO MAJOR  - update/Fill DataList and proper styling
// #TODO MAJOR  - Add and initialize DetailCards

// #TODO Medium - SearchBar on top of DataOverview to search for names with help of regEX
// #TODO Medium - Store last request (maybe last two)

// #TODO minor  - Add impressum


/*

    ### Programm Structure ###

    Header

    SearchBar ---> later Checkboxes/RadioButtons

    DataOverview
    DetailCard - swapping with DataOverview

    Impressum

*/
