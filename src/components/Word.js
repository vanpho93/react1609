import React from 'react';

const Word = ({ vn, en, isMemorized, onRemoveWord, onToggleMemorized }) => {
    const color = isMemorized ? 'green' : 'red';
    return (
        <div className="word">
            <h3 style={{ color }}>{en}</h3>
            <p>{vn}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button className="btn btn-danger" onClick={() => onRemoveWord(en)}>
                    remove
                </button>
                <button className="btn btn-warning" onClick={() => onToggleMemorized(en)}>
                    forgot
                </button>
            </div>
        </div>
    );
};

//FlatList

export default Word;
