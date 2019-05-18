import React from 'react';

import '../css/header.css';

const Header = () => {
    return (
        <div id="header">
            <h1>StarWars Facts with SwapiApi</h1>
            <div>
                This Site was designed and created by <b>Andreas Kochmann</b> <a href="https://github.com/CrazySession"
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"> <i className="github icon"></i></a>
                Thanks for all the awesome Star Wars facts to <a href="https://swapi.co/"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer">Swapi - The StarWars Api</a>
            </div>
        </div>
    )
};

export default Header