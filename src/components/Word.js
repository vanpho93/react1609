import React from 'react';

const Word = ({ vn, en, isMemorized }) => {
    const color = isMemorized ? 'green' : 'red';
    return (
        <div className="word">
            <h3 style={{ color }}>{en}</h3>
            <p>{vn}</p>
            <button className="btn btn-danger">remove</button>
        </div>
    );
};

//FlatList

export default Word;
