import React from 'react';

import Top from './Header';
import Searchbar from './SearchBar';

const App = () => {
    return (
            <div className="ui container">
                <Top        />
                <Searchbar  />
            </div>
    )
};

export default App


/*
<div>
<ul>
<li>Header</li>
<li>SearchBar</li>
<li>DataOverview</li>
<li>DetailCard - swapping with DataOverview</li>
<li>Impressum</li>
</ul>
</div>*/
