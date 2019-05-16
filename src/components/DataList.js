import React from 'react';

import '../css/dataList.css';
// issue! leaves field blank after switching from films to other button or the other way round --- fixed!
const DataList = (props) => {

    if(props.selectedOption !== 'films'){
        const results = props.results.map((res) => {
            return (
                <div id="card" className="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="header">
                                {res.name}
                                <button style={{float:"right"}}>Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return <div>{results}</div>
    }

    if(props.selectedOption === 'films'){
        const results = props.results.map((res) => {
            // #TODO film no name property -> title instead
            return (
                <div id="card" className="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="header">
                                {res.title}
                                <button style={{float:"right"}}>Info</button>
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