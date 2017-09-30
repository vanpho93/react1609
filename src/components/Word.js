import React from 'react';

const Word = ({ vn, en, isMemorized }) => {
    const color = isMemorized ? 'green' : 'red';
    return (
        <div>
            <h3 style={{ color }}>{en}</h3>
            <p>{vn}</p>
        </div>
    );
};

//FlatList

export default Word;
