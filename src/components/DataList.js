import React from 'react';

const DataList = (props) => {

    if(props.selectedOption !== 'films'){
        const results = props.results.map((res) => {
            return (
                <div class="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="header">{res.name}
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
                <div class="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="header">{res.title}
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