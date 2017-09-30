import React, { Component } from 'react';

export default class WordForm extends Component {
    render() {
        return (
            <div>
                <input className="form-control" placeholder="English" ref="txtEn" />
                <br />
                <input className="form-control" placeholder="Vietnamese" ref="txtVn" />
                <br />
                <label><input type="checkbox" ref="cbMemorized" /> Memorized</label>
                <br />
                <button className="btn btn-primary">
                    Add word
                </button>
            </div>
        );
    }
}