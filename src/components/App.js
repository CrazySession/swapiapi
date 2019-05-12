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
