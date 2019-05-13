import React from 'react';

const DataList = (props) => {
    const results = props.results.map((res) => {
        return (
            <div>
                {res.name}  <br/>
            </div>
        )
    });
    return <div>{results}</div>
};

export default DataList