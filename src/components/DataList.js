import React from 'react';

import '../css/dataList.css';
// issue! leaves field blank after switching from films to other button or the other way round --- fixed!

const DataList = (props) => {

    if (props.selectedOption === 'people/') {
        const results = props.results.map((res) => {
            return (
                <div id="card" className="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="header">
                                {res.name}
                            </div>
                            <hr />
                            <div className="meta">
                                Characteristics</div>
                            <div className="description">
                                <ul style={{float:"left"}}>
                                    <li>Height : {res.height}</li>
                                    <li>HairColor : {res.hair_color}</li>
                                    <li>Birth Year : {res.birth_year}</li>
                                    <li>Gender : {res.gender}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return <div>{results}</div>
    }

    if (props.selectedOption === 'films') {
        const results = props.results.map((res) => {
            return (
                <div id="card" className="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="header">
                                {res.title}
                            </div>
                            <hr />
                            <div className="meta">
                                Characteristics</div>
                            <div className="description">
                                <ul>
                                    <li>Part : {res.episode_id}</li>
                                    <li>Director : {res.director}</li>
                                    <li>Producer : {res.producer}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return <div>{results}</div>
    }

    if (props.selectedOption === 'planets') {
        const results = props.results.map((res) => {
            return (
                <div id="card" className="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="header">
                                {res.name}
                            </div>
                            <hr />
                            <div className="meta">
                                Characteristics</div>
                            <div className="description">
                                <ul>
                                    <li>Climate : {res.climate}</li>
                                    <li>Terrain : {res.terrain}</li>
                                    <li>Population : {res.population}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return <div>{results}</div>
    }

    if (props.selectedOption === 'species') {
        const results = props.results.map((res) => {
            return (
                <div id="card" className="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="header">
                                {res.name}
                            </div>
                            <hr />
                            <div className="meta">
                                Characteristics</div>
                            <div className="description">
                                <ul>
                                    <li>Classificaton : {res.classification}</li>
                                    <li>Average Height : {res.average_height}</li>
                                    <li>Language : {res.language}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return <div>{results}</div>
    }

    if (props.selectedOption === 'starships' || props.selectedOption === 'vehicles') {
        const results = props.results.map((res) => {
            return (
                <div id="card" className="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="header">
                                {res.name}
                            </div>
                            <hr />
                            <div className="meta">
                                Characteristics</div>
                            <div className="description">
                                <ul>
                                    <li>Model : {res.model}</li>
                                    <li>Manufacture : {res.manufacturer}</li>
                                    <li>Length : {res.length}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return <div>{results}</div>
    }

};

export default DataList