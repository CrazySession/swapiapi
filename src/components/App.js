import React from 'react';

import Top from './Header';
import RadioButtonForm from './RadiobuttonForm';

const App = () => {
    return (
            <div>
                <Top        />
                <div className="ui container">
                    <RadioButtonForm  />
                </div>
            </div>
    )
};

export default App

// MAJOR  - show DataList with map -- DONE
// MAJOR  - Switch from Seaarchbar to checkboxes/radioButtons -- DONE
// MAJOR  - update/Fill DataList and proper styling -- DONE
// MAJOR  - Add and initialize DetailCards

// #TODO Medium - SearchBar on top of DataOverview to search for names with help of regEX
// #TODO Medium - Store last request (maybe last two)
// #TODO Medium - Add loading next to chose button

// #TODO minor  - Add impressum


/*

    ### Programm Structure ###

    Header

    SearchBar ---> later Checkboxes/RadioButtons

    DataOverview
    DetailCard - swapping with DataOverview

    Impressum

*/
